const moment = require('moment')
const { salt } = require('../../utils/function');

exports.region = (data) => {
  const request = {
    name: data.name,
    description: data.description
  };
  return request;
};

exports.jobProgress = (data) => {
  const request = {
    name: data.name,
    description: data.description
  };
  return request;
};

exports.targetProject = (data) => {
  const request = {
    month: data.month,
    year: data.year,
    target: data.target
  };
  return request;
};

exports.customer = (data) => {
  const request = {
    name: data.name,
    description: data.description
  };
  return request;
};

exports.services = (data) => {
  const request = {
    name: data.name,
    description: data.description
  };
  return request;
};

exports.role = (data) => {
  const request = {
    name: data.name,
    description: data.description
  };
  return request;
};

exports.project = (data) => {
  const request = {
    customer_id: data.customer_id,
    sbu_id: data.sbu_id,
    pic_job_customer: data.pic_job_customer,
    pic_job: data.pic_job,
    services_id: data.services_id,
    job_status_id: data.job_status_id,
    job_category: data.job_category,
    no_internal_user: data.no_internal_user,
    no_so: data.no_so,
    ps_no: data.ps_no,
    ps_date: moment(data.ps_date).format(),
    so_date: moment(data.so_date).format(),
    detail_info : data.detail_info,
    job_name: data.job_name,
    pkb_sph_no: data.pkb_sph_no,
    pkb_sph_date: moment(data.pkb_sph_date).format(),
    pkb_sph_nominal: data.pkb_sph_nominal,
    pkt_no: data.pkt_no,
    pkt_date: data.pkt_date ? moment(data.pkt_date).format() : null,
    pkt_nominal: data.pkt_nominal ? data.pkt_nominal : null,
    baps_no: data.baps_no,
    baps_date: data.baps_date ? moment(data.baps_date).format() : null, 
    fine_type: data.fine_type,
    fine_percentage: Number(data.fine_percentage),
    fine_nominal: Math.round(Number(data.pkt_nominal)*Number(data.fine_percentage)/100),
    total_pkt :( data.fine_nominal && data.pkt_nominal )? Number(data.pkt_nominal) - Math.round(Number(data.pkt_nominal)*Number(data.fine_percentage)/100) : 0,
    job_detail_id: data.job_detail_id,
    created_by: null,
    updated_by: null,
  };
  return request;
};

exports.detailProject = (data) => {
  const request = {
    submit_survey_plan: data.submit_survey_plan ? moment(data.submit_survey_plan).format() : null,
    submit_survey_realization: data.submit_survey_realization ? moment(data.submit_survey_realization).format() : null,
    submit_survey_obstacle: data.submit_survey_obstacle,
    fo_withdrawal_plan: data.fo_withdrawal_plan ? moment(data.fo_withdrawal_plan).format() : null,
    fo_withdrawal_realization: data.fo_withdrawal_realization ? moment(data.fo_withdrawal_realization).format() : null,
    fo_withdrawal_obstacle: data.fo_withdrawal_obstacle,
    installation_fot_plan: data.installation_fot_plan ? moment(data.installation_fot_plan).format() : null,
    installation_fot_realization: data.installation_fot_realization ? moment(data.installation_fot_realization).format() : null,
    installation_fot_obstacle: data.installation_fot_obstacle,
    testcomm_plan: data.testcomm_plan ? moment(data.testcomm_plan).format() : null,
    testcomm_realization: data.testcomm_realization ? moment(data.testcomm_realization).format() : null,
    testcomm_obstacle: data.testcomm_obstacle,
    reporting_plan: data.reporting_plan ? moment(data.reporting_plan).format() : null,
    reporting_realization: data.reporting_realization ? moment(data.reporting_realization).format() : null,
    reporting_obstacle: data.reporting_obstacle,
    qc_plan: data.qc_plan ? moment(data.qc_plan).format() : null,
    qc_realization: data.qc_realization ? moment(data.qc_realization).format() : null,
    qc_obstacle: data.qc_obstacle,
    baps_plan: data.baps_plan ? moment(data.baps_plan).format() : null,
    baps_realization: data.baps_realization ? moment(data.baps_realization).format() : null,
    baps_obstacle: data.baps_obstacle,
    gr_plan: data.gr_plan ? moment(data.gr_plan).format() : null,
    gr_realization: data.gr_realization ? moment(data.gr_realization).format() : null,
    gr_obstacle: data.gr_obstacle,
  };
  console.log(request)
  return request;
};

exports.finance = (data) => {
  const request = {
    gr_number: data.gr_number,
    gr_date: moment(data.gr_date).format(),
    gr_nominal: data.gr_nominal,
    no_so: data.no_so,
    invoice_number: data.invoice_number,
    invoice_date: moment(data.invoice_date).format(),
    invoice_nominal: data.invoice_nominal,
    payment_status: data.payment_status,
    payment_date: moment(data.payment_date).format(),
    payment_nominal: data.payment_nominal,
    descriptions: data.descriptions,
    created_by: null,
    updated_by: null,
  };
  return request;
};

exports.user = (data) => {
  const request = {
    name: data.name,
    role_id: data.role_id,
    job: data.job,
    password: salt(data.password),
    job_desc: data.job_desc,
    descriptions: data.descriptions,
    picture: data.picture,
    email: data.email,
    address: data.address
  };
  return request;
};

exports.editUser = (data) => {
  const request = {
    name: data.name,
    role_id: data.role_id,
    job: data.job,
    job_desc: data.job_desc,
    descriptions: data.descriptions,
    picture: data.picture,
    email: data.email,
    address: data.address
  };
  return request;
};
