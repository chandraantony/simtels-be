const { transaction, raw } = require('objection');
const Project = require('../../models/project');
const moment = require('moment')
const DetailProject = require('../../models/detailPorject');
const model = require('./model');
const Region = require('../../models/mstRegion');

exports.create = (data, detail) => {
  try {
    const query = transaction(Project, DetailProject, async (Project, DetailProject) => {
      const detailProject = await DetailProject.query().insert(model.detailProject(detail));
      data.job_detail_id = detailProject.id;
      const project = await Project.query().insert(model.project(data));
      return Project.query().findById(project.id).withGraphJoined('detail_project');
    });
    return query;
  } catch (error) {
    return error;
  }
};

exports.updateInsternalUser = (data) => {
  const format = moment().format(`[${data}/MM/TEK/STS/]yy`)
  const query = Project.query()
  .findById(data)
  .patch({
    no_internal_user: format
  });

  return query 
}

exports.projectPerYear = (year) => {
  const query = Project.query().select(raw('count(project.id) as total_project'),
    raw(`sum(pkb_sph_nominal) as total_pkb`),
    // raw('sum(if(ModeOfPayment = 'Offline',Amount,0)) as TotalAmount')
    raw('sum(pkt_nominal) as total_pkt'))
    .join('mst_region', 'project.sbu_id', 'mst_region.id')
    .groupBy('mst_region.mst_region.name as region_name');
  return query;
};

exports.projectTarget = (year) => {
  console.log(year)
  const query = Project.query().select(raw('count(project.id) as total_project'),
  raw(`sum(pkb_sph_nominal) as total_pkb`),
  raw('sum(pkt_nominal) as total_pkt'),
  raw('sum(finance.invoice_nominal) as total_invoice')
  ,'mst_region.name as region_name')
  .leftJoin('finance', 'project.no_so', 'finance.no_so')
  .join('mst_region', 'project.sbu_id', 'mst_region.id')
  .whereRaw(`EXTRACT(YEAR FROM project.so_date) = ${year}`)
  .groupBy('mst_region.id')
  return query
}

exports.projectMonthly = (year,month) => {
  const query = Region.query().select('mst_region.id', 'name', 
  raw('sum(project.pkt_nominal) as total_pkt'))
  .leftJoin('project', 'mst_region.id', 'project.sbu_id')
  .whereRaw(`EXTRACT(YEAR FROM project.so_date) = ${year}`)
  .whereRaw(`EXTRACT(MONTH FROM project.so_date) = ${parseInt(month)+1}`)
  .groupBy('mst_region.id')
  return query
}


exports.update = (data) => {
  const detail_project = data.job_detail;
  try {
    const query = transaction(Project, DetailProject, async (Project, DetailProject) => {
      await Project.query().findById(data.id).patch(model.project(data));
      await DetailProject.query().findById(detail_project.id).patch(model.detailProject(detail_project));
      return true;
    });
    return query;
  } catch (error) {
    return error;
  }
};

exports.deleteData = (id) => Project.query().deleteById(id);

exports.findById = (id) => Project.query().findById(id).withGraphFetched('detail_project');

exports.findAll = (pageSize, pageNumber,keyword) => {
  const query = Project.query().select('project.*', 'mst_region.name as region_name', 'mst_customer.name as customer_name', 'mst_job_status.name as status_name', 'mst_service.name as services_name')
    .leftJoin('mst_customer', 'project.customer_id', 'mst_customer.id')
    .leftJoin('mst_job_status', 'project.job_status_id', 'mst_job_status.id')
    .leftJoin('mst_region', 'project.sbu_id', 'mst_region.id')
    .leftJoin('mst_service', 'project.services_id', 'mst_service.id')
    .whereRaw('LOWER(project.job_name) LIKE ?', `%${keyword.toLowerCase()}%`)
    .orWhereRaw('LOWER(project.no_so) LIKE ?', `%${keyword.toLowerCase()}%`)
    .orWhereRaw('LOWER(project.ps_no) LIKE ?', `%${keyword.toLowerCase()}%`)
    // .orWhereRaw('LOWER(project.no_internal_user) LIKE ?', `%${keyword.toLowerCase()}%`)
    // .orWhereRaw('LOWER(mst_job_status.name) LIKE ?', `%${keyword.toLowerCase()}%`)
    .withGraphFetched('detail_project')
    .orderBy('project.id', 'desc')
    .page(pageNumber, pageSize);
  return query;
};
