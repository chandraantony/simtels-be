const excel = require('exceljs');
const { report } = require('../repositories/report');
const makeResponse = require('../utils/response');

exports.summary = async (req, res, next) => {
  try {
    const data = await report();
    res.send(makeResponse.responseSuccesList(data));
  } catch (error) {
    next(error);
  }
};

exports.reportSummary = async (req, res, next) => {
  const { body } = req;
  try {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('reporting');

    worksheet.columns = [
      { header: 'NO', key: 'no', width: 5 },
      { header: 'REGION', key: 'region_name', width: 15 },
      { header: 'SURVEY', key: 'total_survey', width: 15 },
      { header: 'INSTALASI', key: 'total_instalasi', width: 15 },
      { header: 'LAPORAN', key: 'total_reporting', width: 15 },
      { header: 'TEST COMM', key: 'total_testcomm', width: 15 },
      { header: 'QC', key: 'total_qc', width: 15 },
      { header: 'BAPS', key: 'total_baps', width: 15 },
      { header: 'TOTAL', key: 'total_project', width: 15 }
    ];

    // Add Array Rows

    body.forEach((item, index) => {
      worksheet.addRow({
        no: index + 1,
        region_name: item.region_name,
        total_survey: item.total_survey,
        total_instalasi: item.total_instalasi,
        total_reporting: item.total_reporting,
        total_testcomm: item.total_testcomm,
        total_qc: item.total_qc,
        total_baps: item.total_baps,
        total_project: item.total_project
      });
    });

    const sumPorject = body.reduce((previousValue, currentValue) => ({
      no: '',
      region_name: 'TOTAL',
      total_survey: parseInt(previousValue.total_survey) + parseInt(currentValue.total_survey),
      total_instalasi: parseInt(previousValue.total_instalasi) + parseInt(currentValue.total_instalasi),
      total_testcomm: parseInt(previousValue.total_testcomm) + parseInt(currentValue.total_testcomm),
      total_reporting: parseInt(previousValue.total_reporting) + parseInt(currentValue.total_reporting),
      total_qc: parseInt(previousValue.total_qc) + parseInt(currentValue.total_qc),
      total_baps: parseInt(previousValue.total_baps) + parseInt(currentValue.total_baps),
      total_project: parseInt(previousValue.total_project) + parseInt(currentValue.total_project)
    }));
    worksheet.addRow(sumPorject);

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=' + 'test.xlsx'
    );

    workbook.xlsx.write(res).then(() => {
      res.status(200).end();
    });
  } catch (error) {
    next(error);
  }
};
