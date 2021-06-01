const Project = require("../../models/project");
const { raw } = require('objection');
const JobProgress = require("../../models/mstStatus");

exports.report = () => {
    const query = Project.query().select([raw('count(project.id) as total_project'),
    raw('sum(pkb_sph_nominal) as total_pkb'),
    raw('count(CASE WHEN job_status_id = 1 THEN 1 END ) as total_survey'),
    raw('count(CASE WHEN job_status_id = 2 THEN 1 END ) as total_instalasi'),
    raw('count(CASE WHEN job_status_id = 3 THEN 1 END ) as total_testComm'),
    raw('count(CASE WHEN job_status_id = 4 THEN 1 END ) as total_reporting'),
    raw('count(CASE WHEN job_status_id = 5 THEN 1 END ) as total_qc'),
    raw('count(CASE WHEN job_status_id = 6 THEN 1 END ) as total_baps'),
    raw('count(CASE WHEN job_status_id = 7 THEN 1 END ) as done_baps'),
    raw('sum(pkt_nominal) as total_pkt'), 'mst_region.name as region_name'])
    // .where('so_date', '2021-04-25')
    .join('mst_region', 'project.sbu_id', 'mst_region.id')
    .groupBy('mst_region.name');
    return query;
}

exports.exportsSummary = () => {
    
}