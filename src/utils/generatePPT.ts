import pptxgen from "pptxgenjs";

export interface PPTData {
  className: string;
  studentName: string;
  studentId: string;
  major: string;
  hobbies: string;
  laborPlace: string;
  laborTask: string;
  laborStory: string;
  laborLearning: string;
  modelWorkerName: string;
  modelWorkerTitle: string;
  modelWorkerStory: string;
}

export async function generatePPTX(data: PPTData) {
  let pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';

  const colorBg = "F5F5F0";
  const colorText = "1A1A1A";
  const colorFaded = "E5E5E0";
  const colorMuted = "666666";

  // -------------------------------------------------------------
  // MASTER SLIDES
  // -------------------------------------------------------------
  
  // COVER
  pptx.defineSlideMaster({
    title: 'COVER',
    background: { color: colorBg },
    objects: [
      { text: { text: "STRATEGIC FRAMEWORK / V.02", options: { x: '10%', y: '8%', w: '40%', fontSize: 10, color: colorText, fontFace: 'Arial', bold: true } } },
      { text: { text: "LABOR ED COLLABORATIVE", options: { x: '50%', y: '8%', w: '40%', align: 'right', fontSize: 10, color: colorText, fontFace: 'Arial', bold: true } } },
      { rect: { x: '10%', y: '12%', w: '80%', h: 0.01, fill: { color: colorText } } },
      { rect: { x: '10%', y: '85%', w: '80%', h: 0.01, fill: { color: colorText } } },
    ]
  });

  // CONTENT
  pptx.defineSlideMaster({
    title: 'CONTENT',
    background: { color: colorBg },
    objects: [
      { text: { text: "LABOR EDUCATION", options: { x: '5%', y: '4%', w: '45%', color: colorText, fontSize: 9, fontFace: "Arial", bold: true } } },
      { text: { text: `${data.className} / ${data.studentName}`, options: { x: '50%', y: '4%', w: '45%', color: colorText, fontSize: 9, align: 'right', fontFace: "Arial", bold: true } } },
      { rect: { x: '5%', y: '8%', w: '90%', h: 0.01, fill: { color: colorText } } }
    ],
    slideNumber: { x: '92%', y: '92%', color: colorText, fontFace: 'Georgia', fontSize: 12, italic: true }
  });

  // TRANSITION
  pptx.defineSlideMaster({
    title: 'TRANSITION',
    background: { color: colorText },
    objects: [
      { rect: { x: '10%', y: '15%', w: '80%', h: 0.01, fill: { color: colorBg } } },
      { rect: { x: '10%', y: '85%', w: '80%', h: 0.01, fill: { color: colorBg } } }
    ]
  });

  // -------------------------------------------------------------
  // SLIDES
  // -------------------------------------------------------------

  // 1. Cover Slide
  let slide1 = pptx.addSlide({ masterName: 'COVER' });
  slide1.addText("01", { x: '-2%', y: '0%', w: '40%', h: 3, fontSize: 200, color: colorFaded, italic: true, fontFace: "Georgia" });
  slide1.addText("劳动铸就梦想\n奋斗书写青春", { x: '15%', y: '30%', w: '70%', h: 2, fontSize: 52, color: colorText, bold: true, align: 'left', fontFace: "KaiTi", italic: true });
  
  slide1.addShape(pptx.ShapeType.rect, { x: '25%', y: '60%', w: 0.01, h: 1.5, fill: { color: colorText } });
  slide1.addText("《劳动教育课程》学期交流汇报\nRedefining practice and theory.", { x: '28%', y: '58%', w: '60%', h: 1, fontSize: 14, color: colorMuted, fontFace: "Georgia", italic: true });
  slide1.addText(`班级：${data.className}\n姓名：${data.studentName}\n学号：${data.studentId || 'N/A'}`, { x: '28%', y: '68%', w: '40%', h: 1, fontSize: 12, color: colorText, fontFace: "Arial", lineSpacing: 20 });
  
  // 2. Agenda Slide
  let slide2 = pptx.addSlide({ masterName: 'CONTENT' });
  slide2.addText("Index", { x: 0.5, y: 1.0, w: '90%', fontSize: 80, color: colorFaded, italic: true, fontFace: "Georgia" });
  slide2.addText("目录 / CONTENTS", { x: 1.2, y: 1.8, w: '40%', fontSize: 28, color: colorText, fontFace: "KaiTi", italic: true });
  
  slide2.addShape(pptx.ShapeType.rect, { x: 1.2, y: 2.8, w: 0.02, h: 0.8, fill: { color: colorText } });
  slide2.addText("01. 自我介绍与劳动感悟", { x: 1.5, y: 2.8, w: '80%', h: 0.8, fontSize: 20, color: colorText, fontFace: "KaiTi" });
  
  slide2.addShape(pptx.ShapeType.rect, { x: 1.2, y: 3.8, w: 0.02, h: 0.8, fill: { color: colorText } });
  slide2.addText(`02. 榜样的力量：${data.modelWorkerName}`, { x: 1.5, y: 3.8, w: '80%', h: 0.8, fontSize: 20, color: colorText, fontFace: "KaiTi" });
  
  slide2.addShape(pptx.ShapeType.rect, { x: 1.2, y: 4.8, w: 0.02, h: 0.8, fill: { color: colorText } });
  slide2.addText("03. 大学生树立正确劳动观的意义", { x: 1.5, y: 4.8, w: '80%', h: 0.8, fontSize: 20, color: colorText, fontFace: "KaiTi" });

  // 3. Section 1 Transition
  let slide3 = pptx.addSlide({ masterName: 'TRANSITION' });
  slide3.addText("01", { x: '10%', y: '20%', w: '80%', fontSize: 120, color: '333333', italic: true, fontFace: "Georgia" });
  slide3.addText("Self Introduction & Experience", { x: '15%', y: '45%', w: '80%', h: 1.0, fontSize: 24, color: '888888', italic: true, fontFace: "Georgia" });
  slide3.addText("自我介绍及劳动感悟", { x: '15%', y: '55%', w: '80%', h: 1.0, fontSize: 40, color: colorBg, fontFace: "KaiTi", italic: true });
  
  // 4. Personal Introduction
  let slide4 = pptx.addSlide({ masterName: 'CONTENT' });
  slide4.addText("关于我 / ABOUT ME", { x: 0.5, y: 0.8, w: '40%', fontSize: 20, color: colorText, fontFace: "KaiTi", italic: true });
  slide4.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.5, w: 3, h: 3.5, fill: { color: 'EBEBE6' }, line: { color: colorText, width: 0.5 } });
  slide4.addText("[个人照片]", { x: 0.5, y: 1.5, w: 3, h: 3.5, align: 'center', color: colorMuted, fontFace: "KaiTi" });
  
  slide4.addText(`${data.studentName}`, { x: 4.0, y: 1.5, w: 5, fontSize: 36, color: colorText, fontFace: "Georgia", italic: true });
  slide4.addShape(pptx.ShapeType.rect, { x: 4.0, y: 2.3, w: 5, h: 0.01, fill: { color: colorText } });
  slide4.addText(`专业/班级：${data.major} / ${data.className}\n兴趣爱好：${data.hobbies}\n\n生活态度：保持对世界的好奇，用实际行动去体会生活的温度！`, 
    { x: 4.0, y: 2.5, w: 5, h: 2, fontSize: 14, color: colorMuted, fontFace: "KaiTi", lineSpacing: 30 }
  );

  // 5. Life Photos
  let slide5 = pptx.addSlide({ masterName: 'CONTENT' });
  slide5.addText("生活掠影 / LIFE", { x: 0.5, y: 0.8, w: '40%', fontSize: 20, color: colorText, fontFace: "KaiTi", italic: true });
  slide5.addText("生活中的点滴，都是劳动与成长的痕迹。", { x: 0.5, y: 1.4, w: '80%', fontSize: 14, color: colorMuted, fontFace: "KaiTi", italic: true });
  
  slide5.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.0, w: 4, h: 2.5, fill: { color: 'EBEBE6' }, line: { color: colorText, width: 0.5 } });
  slide5.addText("[生活照 1]", { x: 0.5, y: 2.0, w: 4, h: 2.5, align: 'center', color: colorMuted, fontFace: "KaiTi" });
  
  slide5.addShape(pptx.ShapeType.rect, { x: 4.8, y: 2.0, w: 4, h: 2.5, fill: { color: 'EBEBE6' }, line: { color: colorText, width: 0.5 } });
  slide5.addText("[生活照 2]", { x: 4.8, y: 2.0, w: 4, h: 2.5, align: 'center', color: colorMuted, fontFace: "KaiTi" });
  
  // 6. Labor Experience Sharing
  let slide6 = pptx.addSlide({ masterName: 'CONTENT' });
  slide6.addText("劳动经历 / EXPERIENCE", { x: 0.5, y: 0.8, w: '40%', fontSize: 20, color: colorText, fontFace: "KaiTi", italic: true });
  slide6.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.4, w: '90%', h: 0.01, fill: { color: colorText } });
  slide6.addText(`LOCATION: ${data.laborPlace}   TASK: ${data.laborTask}`, { x: 0.5, y: 1.5, w: '90%', h: 0.3, fontSize: 10, color: colorText, fontFace: "Arial", bold: true });
  
  slide6.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.0, w: 3.5, h: 3, fill: { color: 'EBEBE6' }, line: { color: colorText, width: 0.5 } });
  slide6.addText("[劳动现场照片]", { x: 0.5, y: 2.0, w: 3.5, h: 3, align: 'center', color: colorMuted, fontFace: "KaiTi" });
  
  slide6.addText("过程描述 :", { x: 4.3, y: 2.0, w: 5, h: 0.3, fontSize: 12, color: colorText, fontFace: "KaiTi", italic: true });
  slide6.addText(data.laborStory, { x: 4.3, y: 2.4, w: 5, h: 2.5, fontSize: 14, color: colorMuted, fontFace: "KaiTi", lineSpacing: 25, valign: 'top' });

  // 7. Labor Learnings
  let slide7 = pptx.addSlide({ masterName: 'CONTENT' });
  slide7.addText("劳动感悟 / REFLECTION", { x: 0.5, y: 0.8, w: '40%', fontSize: 20, color: colorText, fontFace: "KaiTi", italic: true });
  slide7.addText("“", { x: 0.5, y: 1.5, w: 1, fontSize: 80, color: colorFaded, fontFace: "Georgia" });
  slide7.addText(data.laborLearning, { x: 1.5, y: 1.8, w: 7, h: 3, fontSize: 18, color: colorText, fontFace: "KaiTi", lineSpacing: 38, valign: 'top', italic: true });

  // 8. Section 2 Transition
  let slide8 = pptx.addSlide({ masterName: 'TRANSITION' });
  slide8.addText("02", { x: '10%', y: '20%', w: '80%', fontSize: 120, color: '333333', italic: true, fontFace: "Georgia" });
  slide8.addText("The Power of Role Models", { x: '15%', y: '45%', w: '80%', h: 1.0, fontSize: 24, color: '888888', italic: true, fontFace: "Georgia" });
  slide8.addText("榜样的力量：劳模事迹学习", { x: '15%', y: '55%', w: '80%', h: 1.0, fontSize: 40, color: colorBg, fontFace: "KaiTi", italic: true });

  // 9. Model Worker Intro
  let slide9 = pptx.addSlide({ masterName: 'CONTENT' });
  slide9.addText("认识榜样 / ROLE MODEL", { x: 0.5, y: 0.8, w: '40%', fontSize: 20, color: colorText, fontFace: "KaiTi", italic: true });
  slide9.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.5, w: 3.5, h: 3.5, fill: { color: 'EBEBE6' }, line: { color: colorText, width: 0.5 } });
  slide9.addText(`[${data.modelWorkerName} 照片]`, { x: 0.5, y: 1.5, w: 3.5, h: 3.5, align: 'center', color: colorMuted, fontFace: "KaiTi" });
  
  slide9.addText(data.modelWorkerName, { x: 4.5, y: 1.5, w: 5, fontSize: 40, color: colorText, fontFace: "KaiTi", italic: true });
  slide9.addText(data.modelWorkerTitle, { x: 4.5, y: 2.3, w: 5, fontSize: 14, color: colorMuted, fontFace: "Arial", bold: true });
  slide9.addShape(pptx.ShapeType.rect, { x: 4.5, y: 2.8, w: 4.5, h: 0.01, fill: { color: colorText } });
  slide9.addText(data.modelWorkerStory, { x: 4.5, y: 3.0, w: 4.5, h: 2, fontSize: 14, color: colorMuted, fontFace: "KaiTi", lineSpacing: 25, valign: 'top' });

  // 10. Model Worker Analysis (Why they inspire)
  let slide10 = pptx.addSlide({ masterName: 'CONTENT' });
  slide10.addText("精神传承 / SPIRIT", { x: 0.5, y: 0.8, w: '40%', fontSize: 20, color: colorText, fontFace: "KaiTi", italic: true });
  slide10.addText("从劳模身上学到了什么？", { x: 0.5, y: 1.4, w: '80%', fontSize: 24, color: colorText, fontFace: "KaiTi" });
  
  slide10.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.2, w: 0.02, h: 1.5, fill: { color: colorText } });
  slide10.addText("执着专注、精益求精", { x: 0.7, y: 2.2, w: 3.5, fontSize: 16, color: colorText, fontFace: "KaiTi", italic: true });
  slide10.addText("在平凡的岗位上做到极致，哪怕是一个小小的环节也要做到100%完美。这告诉我们学习和工作中不应敷衍了事。", { x: 0.7, y: 2.7, w: 3.5, h: 1.5, fontSize: 12, color: colorMuted, fontFace: "KaiTi", lineSpacing: 20 });
  
  slide10.addShape(pptx.ShapeType.rect, { x: 4.8, y: 2.2, w: 0.02, h: 1.5, fill: { color: colorText } }); 
  slide10.addText("一丝不苟、追求卓越", { x: 5.0, y: 2.2, w: 3.5, fontSize: 16, color: colorText, fontFace: "KaiTi", italic: true });
  slide10.addText("面对困难迎难而上，用汗水浇灌收获。提醒青年一代应该拒绝短视和浮躁，要用扎实的基础去创造长远价值。", { x: 5.0, y: 2.7, w: 3.5, h: 1.5, fontSize: 12, color: colorMuted, fontFace: "KaiTi", lineSpacing: 20 });

  // 11. Section 3 Transition
  let slide11 = pptx.addSlide({ masterName: 'TRANSITION' });
  slide11.addText("03", { x: '10%', y: '20%', w: '80%', fontSize: 120, color: '333333', italic: true, fontFace: "Georgia" });
  slide11.addText("Meaning & Value", { x: '15%', y: '45%', w: '80%', h: 1.0, fontSize: 24, color: '888888', italic: true, fontFace: "Georgia" });
  slide11.addText("探讨：树立正确劳动观的重要意义", { x: '15%', y: '55%', w: '80%', h: 1.0, fontSize: 40, color: colorBg, fontFace: "KaiTi", italic: true });

  // 12. Significance - Combating issues
  let slide12 = pptx.addSlide({ masterName: 'CONTENT' });
  slide12.addText("时代号召 / CALLING", { x: 0.5, y: 0.8, w: '40%', fontSize: 20, color: colorText, fontFace: "KaiTi", italic: true });
  slide12.addText("拒绝“躺平”，发扬艰苦奋斗精神", { x: 0.5, y: 1.5, w: '80%', fontSize: 24, color: colorText, fontFace: "KaiTi", italic: true });
  slide12.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.1, w: 8.5, h: 0.01, fill: { color: colorText } });
  slide12.addText("当前社会中存在“眼高手低”、“躺平”、“佛系”等思潮。我们要认识到：\n\n• 每一份平凡的劳动都是构成社会运转不可或缺的齿轮。\n• 真正的幸福与成就感只能来源于脚踏实地的奋斗。\n\n树立正确的劳动观，能帮助我们在快节奏、高压力的环境中保持内心的坚定，不随波逐流。", { x: 0.5, y: 2.4, w: 8.5, h: 2.5, fontSize: 16, color: colorMuted, fontFace: "KaiTi", lineSpacing: 30, valign: 'top' });

  // 13. Significance - Personal growth
  let slide13 = pptx.addSlide({ masterName: 'CONTENT' });
  slide13.addText("个人成长 / GROWTH", { x: 0.5, y: 0.8, w: '40%', fontSize: 20, color: colorText, fontFace: "KaiTi", italic: true });
  slide13.addText("理论联系实际，培养真才实学", { x: 0.5, y: 1.5, w: '80%', fontSize: 24, color: colorText, fontFace: "KaiTi", italic: true });
  slide13.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.1, w: 8.5, h: 0.01, fill: { color: colorText } });
  slide13.addText("对大学生而言：\n\nI. 劳动教育是通向专业实践的桥梁。只有将书本知识应用到真实的劳动中，才能培养出发现问题、解决问题的真实能力。\n\nII. 劳动能够磨砺心智，培养吃苦耐劳的意志品格和团队协作精神，为我们将来步入职场打下坚实的基础。", { x: 0.5, y: 2.4, w: 8.5, h: 2.5, fontSize: 16, color: colorMuted, fontFace: "KaiTi", lineSpacing: 30, valign: 'top' });

  // 14. Conclusion / Thank You
  let slide14 = pptx.addSlide({ masterName: 'COVER' });
  slide14.addText("劳动最光荣，奋斗正当时", { x: '10%', y: '40%', w: '80%', h: 1.5, fontSize: 44, color: colorText, align: 'center', fontFace: "KaiTi", italic: true });
  slide14.addShape(pptx.ShapeType.rect, { x: '45%', y: '55%', w: '10%', h: 0.01, fill: { color: colorText } });
  slide14.addText("感谢聆听", { x: '10%', y: '58%', w: '80%', h: 0.8, fontSize: 18, color: colorMuted, align: 'center', fontFace: "KaiTi" });

  const fileName = `${data.className}-${data.studentName || '劳动教育分享'}.pptx`;
  pptx.writeFile({ fileName: fileName });
}
