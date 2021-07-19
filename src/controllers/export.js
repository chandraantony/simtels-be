const excel = require('exceljs');
const { dateFormat } = require('../utils/helper');
const moment = require('moment')


const formatDate = (arg) => {
  if(arg){
    return moment(arg).format('DD-MM-YYYY')
  }
  return '-'
}

exports.exportFile = (req, res, next) => {
  const { body } = req;
  console.log(body)
  try {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('reporting');
    worksheet.mergeCells('E2', 'G3');
    worksheet.mergeCells('A2:A4');
    worksheet.mergeCells('B2:B4');
    worksheet.mergeCells('C2:C4');
    worksheet.mergeCells('D2:D4');
    worksheet.mergeCells('K2:K4');
    // worksheet.mergeCells(a1)
    worksheet.mergeCells('H2', 'J3');

    worksheet.getCell('A2').value = 'No';
    worksheet.getCell('B2').value = 'Kategori Pekerjaan';
    worksheet.getCell('C2').value = 'SBU Regional';
    worksheet.getCell('D2').value = 'No Internal User';
    worksheet.getCell('E2').value = 'Dasar Pekerjaan';
    worksheet.getCell('E4').value = 'Tgl So';
    worksheet.getCell('F4').value = 'No So';
    worksheet.getCell('G4').value = 'Nama Pekerjaan';

    // // sub pekerjaan PKB
    worksheet.getCell('H2').value = 'Perintah Kerja Buka (PKB)';
    worksheet.getCell('H4').value = 'No';
    worksheet.getCell('I4').value = 'Tanggal';
    worksheet.getCell('J4').value = 'Nilai (Rp)';

    // // pelaksana Pekerjana
    worksheet.getCell('K2').value = 'Pelaksana Pekerjaan';

    // pemberi pekerja
    worksheet.getCell('L2').value = 'Pemberi Kerja';
    worksheet.getCell('L4').value = 'Nama';
    worksheet.getCell('M4').value = 'SBU';
    worksheet.getCell('N4').value = 'Nama PTL';
    worksheet.getCell('O4').value = 'Layanan';
    worksheet.mergeCells('L2:O3');

    // progress pekerjaan 
    worksheet.getCell('P2').value = 'Progres Pekerjaan'
    worksheet.mergeCells('P2:P4');

    // detail progress
    worksheet.getCell('Q2').value = 'Detail Progress'
    worksheet.mergeCells('Q2:Q4');

    // perizinan 
    worksheet.getCell('R2').value = 'Perizinan'
    worksheet.mergeCells('R2:R4')

    // mulai 
    worksheet.getCell('S2').value = 'Time Line Pekerjaan'
    worksheet.mergeCells('S2:AS2');

    worksheet.getCell('S3').value = 'Mulai'
    worksheet.getCell('S4').value = 'Target'
    worksheet.getCell('T4').value = 'Realisasi'
    worksheet.getCell('U4').value = 'Kendala'

    worksheet.mergeCells('S3:U3');

    //submit hasil survery 
    worksheet.mergeCells('V3:X3')
    worksheet.getCell('V3').value = 'Submit Hasil Survey'
    worksheet.getCell('V4').value = 'Target'
    worksheet.getCell('W4').value = 'Realisasi'
    worksheet.getCell('X4').value = 'Kendala'

    //selesai penarikan foc
    worksheet.mergeCells('Y3:AA3')
    worksheet.getCell('Y3').value = 'Selesai Penarikan FOC'
    worksheet.getCell('Y4').value = 'Target'
    worksheet.getCell('Z4').value = 'Realisasi'
    worksheet.getCell('AA4').value = 'Kendala'

    // Selesai Instalasi FOT
    worksheet.mergeCells('AB3:AD3')
    worksheet.getCell('AB3').value = 'Selesai Instalasi FOT'
    worksheet.getCell('AB4').value = 'Target'
    worksheet.getCell('AC4').value = 'Realisasi'
    worksheet.getCell('AD4').value = 'Kendala'

    //Selesai Test Com
    worksheet.mergeCells('AE3:AG3')
    worksheet.getCell('AE3').value = 'Selesai Test Comm'
    worksheet.getCell('AE4').value = 'Target'
    worksheet.getCell('AF4').value = 'Realisasi'
    worksheet.getCell('AG4').value = 'Kendala'

    //Submit Laporan HC
    worksheet.mergeCells('AH3:AJ3')
    worksheet.getCell('AH3').value = 'Submit Laporan HC'
    worksheet.getCell('AH4').value = 'Target'
    worksheet.getCell('AI4').value = 'Realisasi'
    worksheet.getCell('AJ4').value = 'Kendala'

    //Selesai QC
    worksheet.mergeCells('AK3:AM3')
    worksheet.getCell('AK3').value = 'Selesai QC'
    worksheet.getCell('AK4').value = 'Target'
    worksheet.getCell('AL4').value = 'Realisasi'
    worksheet.getCell('AM4').value = 'Kendala'

    //Selesai BAPS
    worksheet.mergeCells('AN3:AP3')
    worksheet.getCell('AN3').value = 'Selesai BAPS'
    worksheet.getCell('AN4').value = 'Target'
    worksheet.getCell('AO4').value = 'Realisasi'
    worksheet.getCell('AP4').value = 'Kendala'

    //Selesai GR
    worksheet.mergeCells('AQ3:AS3')
    worksheet.getCell('AQ3').value = 'Selesai GR'
    worksheet.getCell('AQ4').value = 'Target'
    worksheet.getCell('AR4').value = 'Realisasi'
    worksheet.getCell('AS4').value = 'Kendala'

    // admin tek 
    worksheet.mergeCells('H1:AS1')
    worksheet.getCell('H1').value = 'DI ISI OLEH ADMIN TEKNIK'
    worksheet.getCell('H1').font = {
      name: 'Arial',
      size: 15,
      bold: true
    };

    // perintah kerja tutup
    worksheet.mergeCells('AT2:AV3')
    worksheet.getCell('AT2').value = 'Perintah Kerja Tutup (PKT)'
    worksheet.getCell('AT4').value = 'Nomor'
    worksheet.getCell('AU4').value = 'Tanggal'
    worksheet.getCell('AV4').value = 'Nominal (Rp)'

    // baps
    worksheet.mergeCells('AW2:AX3')
    worksheet.getCell('AW2').value = 'Berita acara (BA)'
    worksheet.getCell('AW4').value = 'Nomor'
    worksheet.getCell('AX4').value = 'Tanggal'

    // Denda
    worksheet.mergeCells('AY2:BA3')
    worksheet.getCell('AY2').value = 'Denda'
    worksheet.getCell('AY4').value = 'Nomor'
    worksheet.getCell('AZ4').value = '%'
    worksheet.getCell('BA4').value = 'Nominal (Rp)'
  

    
    worksheet.getCell('A2', 'G4').alignment = { horizontal: 'center' };
    const arr = ['A2', 'B2', 'C2', 'D2', 'E2', 'E4', 'F4', 'G4','K2','L2','L4','M4', 'N4', 'O4',
    'P2', 'Q2', 'R2', 'H2', 'H4', 'I4','J4', 'K2', 'S2', 'S3', 'S4', 'T4', 'U4', 'AQ4', 'AQ3',
    'AO3', 'A04', 'AR4', 'AS4', 'AP4', 'AO4', 'AN4', 'AN3', 'AM4', 'AH4', 'AK4', 'AK3',
    'AH3', 'AH4', 'AI4', 'AJ4', 'AE3', 'AE4', 'AF4', 'AG4', 'AB3', 'AB4', 'AC4', 'AD4',
    'V3', 'V4', 'W4', 'X4', 'Y3', 'Y4', 'Z4', 'AA4', 'AL4', 'AT2', 'AT4', 'AU4', 'AV4', 
    'AW2', 'AW4', 'AX4', 'AY2', 'AY4', 'AZ4', 'BA4'];

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
      // worksheet.getCell(key).fill = {
      //   fgColor : {argb : '#FFFF00'}
      // };
    });

    worksheet.getCell('A5').value = ''
    
    worksheet.views = [
      {state: 'frozen', xSplit: 7, ySplit: 4, topLeftCell: 'G10', activeCell: 'A1'}
    ];

    worksheet.columns = [
      { key: 'no', width: 5 },
      { key: 'job_category', width: 20 },
      { key: 'region', width: 20 },
      { key: 'no_internal_user', width: 25 },
      { key: 'so_date', width: 15 },
      { key: 'no_so', width: 15 },
      { key: 'job_name', width: 20 },
      { key: 'pkb_no', width: 10 },
      { key: 'pkb_date', width: 15 },
      { key: 'pkb_nominal', width: 15 },
      { key: 'pelaksana_pekerjaan', width : 20},
      { key: 'client', width: 15 },
      { key: 'sbu_name', width: 15 },
      { key: 'sbu_pic', width: 15 },
      { key: 'service_name', width:15},
      { key: 'job_progress', width:20},
      { key: 'project_info', width:20},
      { key: 'permit', width:15},
      { key: 'start_project', width:10},
      { key: 'realization_project', width:15},
      { key: 'obstacle_project', width:15},
      { key: 'start_survery', width:15},
      { key: 'realization_survey', width:15},
      { key: 'obstacle_survey', width:15},
      { key: 'start_foc', width:15},
      { key: 'realization_foc', width:15},
      { key: 'obstacle_foc', width:15},
      { key: 'start_fot', width:15},
      { key: 'realization_fot', width:15},
      { key: 'obstacle_fot', width:15},
      { key: 'start_testcomm', width:15},
      { key: 'realization_testcomm', width:15},
      { key: 'obstacle_testcomm', width:15},
      { key: 'start_report', width:15},
      { key: 'realization_report', width:15},
      { key: 'obstacle_report', width:15},
      { key: 'start_qc', width:15},
      { key: 'realization_qc', width:15},
      { key: 'obstacle_qc', width:15},
      { key: 'start_bap', width:15},
      { key: 'realization_bap', width:15},
      { key: 'obstacle_bap', width:15},
      { key: 'start_gr', width:15},
      { key: 'realization_gr', width:15},
      { key: 'obstacle_gr', width:15},
      { key: 'pkt_no', width:15},
      { key: 'pkt_date', width:15},
      { key: 'pkt_nominal', width:15},
      { key: 'baps_no', width:15},
      { key: 'baps_date', width:15},
      { key: 'fine_type', width:15},
      { key: 'fine_percentage', width:15},
      { key: 'fine_nominal', width:15},
      

      
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
        job_name: item.job_name,
        pkb_no : item.pkb_sph_no,
        pkb_date : dateFormat(item.pkb_sph_data),
        pkb_nominal : item.pkb_sph_nominal,
        pelaksana_pekerjaan :  item.pic_job,
        client : item.customer_name,
        sbu_name : item.customer_name,
        sbu_pic : item.pic_job_customer,
        service_name : item.services_name,
        job_progress : item.status_name,
        project_info : item.detail_info,
        permit : item.permit ? 'Done' : 'On Progress',
        start_project : '',
        realization_project: '',
        obstacle_project : '',
        start_survery : formatDate(item.detail_project.submit_survey_plan),
        realization_survey : formatDate(item.detail_project.submit_survey_realization),
        obstacle_survey : item.detail_project.submit_survey_obstacle,
        start_foc : formatDate(item.detail_project.fo_withdrawal_plan),
        realization_foc : formatDate(item.detail_project.fo_withdrawal_realization),
        obstacle_foc : item.detail_project.fo_withdrawal_obstacle,
        start_fot : formatDate(item.detail_project.installation_fot_plan),
        realization_fot : formatDate(item.detail_project.installation_fot_realization),
        obstacle_fot : item.detail_project.installation_fot_obstacle,
        start_testcomm : formatDate(item.detail_project.testcomm_plan),
        realization_testcomm : formatDate(item.detail_project.testcomm_realization),
        obstacle_testcomm : item.detail_project.testcomm_obstacle,
        start_report : formatDate(item.detail_project.reporting_plan),
        realization_report : formatDate(item.detail_project.reporting_realization),
        obstacle_report : item.detail_project.reporting_obstacle,
        start_qc : formatDate(item.detail_project.qc_plan),
        realization_qc : formatDate(item.detail_project.qc_realization),
        obstacle_qc : item.detail_project.qc_obstacle,
        start_bap : formatDate(item.detail_project.baps_plan),
        realization_bap : formatDate(item.detail_project.baps_realization),
        obstacle_bap : item.detail_project.baps_obstacle,
        start_gr : formatDate(item.detail_project.gr_plan),
        realization_gr : formatDate(item.detail_project.gr_realization),
        obstacle_gr : item.detail_project.gr_obstacle,
        pkt_no : item.pkt_no,
        pkt_date : formatDate(item.pkt_date),
        pkt_nominal : item.pkt_nominal,
        baps_no : item.baps_no,
        baps_date : formatDate(item.baps_date),
        fine_type : item.fine_type,
        fine_percentage : item.fine_percentage,
        fine_nominal : item.fine_nominal
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
