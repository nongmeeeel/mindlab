import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementId, fileName) => {
  let element = null;
  try {
    element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }
    
    // 버튼들을 임시로 숨김
    const actionButtons = element.querySelectorAll('.action-buttons');
    const imageActions = element.querySelectorAll('.image-actions');
    
    // 모든 버튼 숨기기
    [...actionButtons, ...imageActions].forEach(button => {
      button.style.display = 'none';
    });
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true
    });
    
    // 모든 버튼 복원
    [...actionButtons, ...imageActions].forEach(button => {
      button.style.display = '';
    });
    
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    pdf.addImage(
      canvas.toDataURL('image/png'), 
      'PNG', 
      0, 
      position, 
      imgWidth, 
      imgHeight
    );
    heightLeft -= pageHeight;
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(
        canvas.toDataURL('image/png'), 
        'PNG', 
        0, 
        position, 
        imgWidth, 
        imgHeight
      );
      heightLeft -= pageHeight;
    }
    
    pdf.save(`${fileName}.pdf`);
    return true;
  } catch (error) {
    console.error('PDF 생성 중 오류 발생:', error);
    // 에러 발생 시에도 모든 버튼 복원
    if (element) {
      const actionButtons = element.querySelectorAll('.action-buttons');
      const imageActions = element.querySelectorAll('.image-actions');
      [...actionButtons, ...imageActions].forEach(button => {
        button.style.display = '';
      });
    }
    return false;
  }
}; 