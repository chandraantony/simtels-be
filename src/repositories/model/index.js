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

  };
  return request;
};

exports.finnace = (data) => {
  const request = {
    gr_number	: data.gr_number,
    gr_date : data.gr_date,
    gr_nominal : data.gr_nominal,	
    invoice_number : data.invoice_number,	
    invoice_date : data.invoice_number,
    invoice_nominal	: data.invoice_nominal,	
    payment_status : data.payment_status,	
    payent_date	: data.payent_date,	
    payment_nominal	: data.payment_nominal,	
    descriptions	: data.descriptions,	
    created_by	: null,	
    updated_by : null,
  };
  return request;
};
