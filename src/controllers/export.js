const excel = require('exceljs');
const { dateFormat } = require('../utils/helper');

exports.exportFile = (req, res, next) => {
  const { body } = req;
  try {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('reporting');
    worksheet.mergeCells('E2', 'G2');
    worksheet.mergeCells('A2:A3');
    worksheet.mergeCells('B2:B3');
    worksheet.mergeCells('C2:C3');
    worksheet.mergeCells('D2:D3');
    worksheet.mergeCells('K2:K3');
    // worksheet.mergeCells(a1)
    worksheet.mergeCells('H2', 'J2');

    worksheet.getCell('A2').value = 'No';
    worksheet.getCell('H2').value = 'PKB';
    worksheet.getCell('H3').value = 'No';
    worksheet.getCell('I2').value = 'Tanggal';
    worksheet.getCell('K1').value = 'Pelaksan';
    worksheet.getCell('J2').value = 'Nilai';
    worksheet.getCell('B2').value = 'Kategori Pekerjaan';
    worksheet.getCell('C2').value = 'SBU Regional';
    worksheet.getCell('D2').value = 'No Internal User';
    worksheet.getCell('E2').value = 'Dasar Pekerjaan';
    worksheet.getCell('E3').value = 'Tgl So';
    worksheet.getCell('F3').value = 'No So';
    worksheet.getCell('G3').value = 'Nama Pekerjaan';

    worksheet.getCell('A2', 'G3').alignment = { horizontal: 'center' };
    const arr = ['A2', 'B2', 'C2', 'D2', 'E2', 'E3', 'F3', 'G3'];

    arr.map((key, idx) => {
      worksheet.getCell(key).border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
      worksheet.getCell(key).font = {
        name: 'Arial',
        size: 10,
        bold: true
      };
      worksheet.getCell(key).alignment = { horizontal: 'center' };
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '#ffff00' }
      };
    });

    worksheet.columns = [
      { key: 'no', width: 5 },
      { key: 'job_category', width: 20 },
      { key: 'region', width: 10 },
      { key: 'no_internal_user', width: 25 },
      { key: 'so_date', width: 10 },
      { key: 'no_so', width: 10 },
      { key: 'job_name', width: 15 },
    ];

    // Add Array Rows

    body.forEach((item, index) => {
      worksheet.addRow({
        no: index + 1,
        job_category: item.job_category.toUpperCase(),
        region: item.region_name,
        no_internal_user: item.no_internal_user,
        so_date: dateFormat(item.so_date),
        no_so: item.no_so,
        job_name: item.job_name
      });
    });

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=' + 'tutorials.xlsx'
    );

    return workbook.xlsx.write(res).then(() => {
      res.status(200).end();
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
