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
    so_date: data.so_date,
    job_name: data.job_name,
    pkb_sph_no: data.pkb_sph_no,
    pkb_sph_date: data.pkb_sph_date,
    pkb_sph_nominal: data.pkb_sph_nominal,
    job_detail_id: data.job_detail_id,
    created_by: null,
    updated_by: null,
  };
  return request;
};

exports.detailProject = (data) => {
  const request = {
    submit_survey_plan: data.submit_survey_plan,
    submit_survey_realization: data.submit_survey_realization,
    submit_survey_obstacle: data.submit_survey_obstacle,
    fo_withdrawal_plan: data.fo_withdrawal_plan,
    fo_withdrawal_realization: data.fo_withdrawal_realization,
    fo_withdrawal_obstacle: data.fo_withdrawal_obstacle,
    installation_fot_plan: data.installation_fot_plan,
    installation_fot_realization: data.installation_fot_realization,
    installation_fot_obstacle: data.installation_fot_obstacle,
    testcomm_plan: data.testcomm_plan,
    testcomm_realization: data.testcomm_realization,
    testcomm_obstacle: data.testcomm_obstacle,
    reporting_plan: data.reporting_plan,
    reporting_realization: data.reporting_realization,
    reporting_obstacle: data.reporting_obstacle,
    qc_plan: data.qc_plan,
    qc_realization: data.qc_realization,
    qc_obstacle: data.qc_obstacle,
    baps_plan: data.baps_plan,
    baps_realization: data.baps_realization,
    baps_obstacle: data.baps_obstacle,
    gr_plan: data.gr_plan,
    gr_realization: data.gr_realization,
    gr_obstacle: data.gr_obstacle,
    pkt_no: data.pkt_no,
    pkt_date: data.pkt_date,
    pkt_nominal: data.pkt_nominal,
    baps_no: data.baps_no,
    baps_date: data.baps_date,
    fine_type: data.fine_type,
    fine_nominal: data.fine_nominal,
  };
  return request;
};

exports.finance = (data) => {
  const request = {
    gr_number: data.gr_number,
    gr_date: data.gr_date,
    gr_nominal: data.gr_nominal,
    invoice_number: data.invoice_number,
    invoice_date: data.invoice_date,
    invoice_nominal: data.invoice_nominal,
    payment_status: data.payment_status,
    payent_date: data.payent_date,
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
