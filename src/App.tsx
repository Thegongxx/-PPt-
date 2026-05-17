import React, { useState } from 'react';
import { Download, FileText, Presentation, User, Briefcase, Award, Library } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generatePPTX, PPTData } from './utils/generatePPT';

const DEFAULT_DATA: PPTData = {
  className: "人工智能1班",
  studentName: "张三",
  studentId: "20230001",
  major: "人工智能",
  hobbies: "编程、摄影、跑步",
  laborPlace: "学校图书馆",
  laborTask: "整理书籍与清洁书架",
  laborStory: "在这个过程中，我负责将散落的书籍按索书号重新归位，并对几排老旧书架进行了深度清洁。虽然搬书和爬高上低会感到手酸腿疼，但看到图书馆恢复整洁有序，内心充满了成就感。",
  laborLearning: "我深刻认识到“细节决定成败”。每一本书的准确归位，都关系到下一位同学能否顺利借阅。看似简单的重复劳动，实则是在培养我们的耐心和责任感。这也让我更加尊重校园里默默付出的后勤工作人员。",
  modelWorkerName: "王曙群",
  modelWorkerTitle: "中国航天特级技师，大国工匠",
  modelWorkerStory: "他从事航天器研制装配工作30余年，攻克了一系列装配技术难题。在空间站对接机构研制期间，他带领团队进行了上千次的试验调整。他把每一次的手工对接、螺丝拧紧都做到了极致，用实际行动诠释了“差之毫厘，谬以千里”的航天装配标准。"
};

export default function App() {
  const [formData, setFormData] = useState<PPTData>(DEFAULT_DATA);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'personal' | 'labor' | 'hero'>('personal');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      await generatePPTX(formData);
    } catch (error) {
      console.error("生成PPT失败:", error);
      alert("生成失败，请重试！");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans flex flex-col md:flex-row overflow-hidden">
      {/* Left Sidebar: Interactive Form */}
      <div className="w-full md:w-1/3 max-w-md bg-[#F5F5F0] border-r border-[#1A1A1A]/10 flex flex-col h-full overflow-y-auto">
        <div className="p-8 pb-4">
          <div className="text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-[#1A1A1A] pb-1 inline-block mb-4">Strategic Framework / PPT</div>
          <h1 className="text-3xl font-serif italic text-[#1A1A1A] flex items-center gap-3 mb-2">
            PPT Generator
          </h1>
          <p className="text-[#1A1A1A]/60 text-xs font-light italic leading-relaxed">
            按照课程要求快速生成10-15页精美排版的PPT电子版。
          </p>
        </div>

        <div className="flex px-8 pt-4 border-b border-[#1A1A1A]/10 gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold">
          <button 
            onClick={() => setActiveTab('personal')}
            className={`pb-3 transition-colors relative ${activeTab === 'personal' ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70'}`}
          >
            个人信息
            {activeTab === 'personal' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1A1A1A]"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('labor')}
            className={`pb-3 transition-colors relative ${activeTab === 'labor' ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70'}`}
          >
            劳动经历
            {activeTab === 'labor' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1A1A1A]"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('hero')}
            className={`pb-3 transition-colors relative ${activeTab === 'hero' ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70'}`}
          >
            劳模事迹
            {activeTab === 'hero' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1A1A1A]"></span>}
          </button>
        </div>

        <div className="p-8 flex-1">
          <AnimatePresence mode="wait">
            {activeTab === 'personal' && (
              <motion.div key="personal" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                <InputGroup label="班级名称">
                  <input name="className" value={formData.className} onChange={handleChange} className="form-input" placeholder="例如：人工智能1班" />
                </InputGroup>
                <InputGroup label="姓名">
                  <input name="studentName" value={formData.studentName} onChange={handleChange} className="form-input" placeholder="你的名字" />
                </InputGroup>
                <InputGroup label="学号 (选填)">
                  <input name="studentId" value={formData.studentId} onChange={handleChange} className="form-input" placeholder="学号将显示在封面" />
                </InputGroup>
                <InputGroup label="专业">
                  <input name="major" value={formData.major} onChange={handleChange} className="form-input" placeholder="所在专业" />
                </InputGroup>
                <InputGroup label="兴趣爱好">
                  <input name="hobbies" value={formData.hobbies} onChange={handleChange} className="form-input" placeholder="例如：编程、运动，展现真实的你" />
                </InputGroup>
              </motion.div>
            )}

            {activeTab === 'labor' && (
              <motion.div key="labor" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                <InputGroup label="劳动地点">
                  <input name="laborPlace" value={formData.laborPlace} onChange={handleChange} className="form-input" placeholder="如：学校图书馆、社区、实验室" />
                </InputGroup>
                <InputGroup label="具体任务">
                  <input name="laborTask" value={formData.laborTask} onChange={handleChange} className="form-input" placeholder="简短描述任务，如：整理书籍" />
                </InputGroup>
                <InputGroup label="过程描述 (建议80-150字)">
                  <textarea name="laborStory" value={formData.laborStory} onChange={handleChange} className="form-textarea" rows={4} placeholder="描述劳动的过程和你的付出..." />
                </InputGroup>
                <InputGroup label="感悟与收获 (必须真实，可大可小)">
                  <textarea name="laborLearning" value={formData.laborLearning} onChange={handleChange} className="form-textarea" rows={4} placeholder="从这件事情中，你体会到了什么道理？" />
                </InputGroup>
              </motion.div>
            )}

            {activeTab === 'hero' && (
              <motion.div key="hero" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                <InputGroup label="劳模人物姓名">
                  <input name="modelWorkerName" value={formData.modelWorkerName} onChange={handleChange} className="form-input" placeholder="如：王曙群、黄大年" />
                </InputGroup>
                <InputGroup label="人物头衔/荣誉">
                  <input name="modelWorkerTitle" value={formData.modelWorkerTitle} onChange={handleChange} className="form-input" placeholder="如：特级技师，大国工匠" />
                </InputGroup>
                <InputGroup label="事迹简介 (建议100-200字)">
                  <textarea name="modelWorkerStory" value={formData.modelWorkerStory} onChange={handleChange} className="form-textarea" rows={6} placeholder="描述该人物的核心事迹，体现无私奉献或工匠精神..." />
                </InputGroup>
                <p className="text-[10px] text-[#1A1A1A]/40 mt-2 font-mono uppercase tracking-widest">
                  * System: Text generation preset applied.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-8 border-t border-[#1A1A1A]/10 bg-[#F5F5F0] sticky bottom-0 z-10 w-full">
          <button 
            disabled={isGenerating}
            onClick={handleGenerate}
            className="w-full py-4 bg-transparent border border-[#1A1A1A] disabled:opacity-50 text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#1A1A1A] hover:text-[#F5F5F0] transition-colors flex items-center justify-center gap-3 cursor-pointer"
          >
            {isGenerating ? (
              <span className="w-4 h-4 border border-[#1A1A1A]/30 border-t-[#1A1A1A] rounded-full animate-spin" />
            ) : (
              <Download size={16} strokeWidth={1.5} />
            )}
            {isGenerating ? 'Generating...' : 'Generate PPTX'}
          </button>
        </div>
      </div>

      {/* Right Content: Beautiful Preview Area */}
      <div className="flex-1 bg-[#F5F5F0] relative hidden md:flex items-center justify-center p-12 overflow-hidden flex-col">
        {/* Decorative large number in background */}
        <div className="absolute -left-4 top-0 opacity-[0.03] pointer-events-none select-none">
          <span className="text-[340px] font-serif italic leading-none">01</span>
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-[#1A1A1A]/10 flex items-center justify-center pointer-events-none">
           <div className="w-32 h-32 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-[#1A1A1A] opacity-[0.03]"></div>
           </div>
        </div>

        <div className="relative z-10 w-full max-w-4xl aspect-[16/9] bg-[#F5F5F0] border border-[#1A1A1A]/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)] flex flex-col justify-between p-16 group hover:border-[#1A1A1A]/20 transition-colors">
          
          <header className="flex justify-between items-baseline mb-12">
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-[#1A1A1A] pb-1">
              LABOR ED / {formData.className || 'CLASS'}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold">
              BY {formData.studentName || 'STUDENT NAME'}
            </div>
          </header>
          
          <div className="flex-grow flex flex-col justify-center">
            <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl lg:text-7xl font-serif italic text-[#1A1A1A] leading-[1.1] mb-10">
              劳动铸就梦想<br/>
              <span className="pl-16">奋斗书写青春</span>
            </motion.h2>
            
            <div className="flex gap-12 ml-16 items-start">
              <div className="w-px h-24 bg-[#1A1A1A] opacity-20"></div>
              <div className="max-w-md">
                <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-lg leading-relaxed mb-6 font-light opacity-80 italic text-[#1A1A1A]">
                  《劳动教育课程》学期交流汇报。探索从理论到实践的认知之旅。
                </motion.p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 border border-[#1A1A1A] text-[10px] uppercase tracking-widest text-[#1A1A1A]">Education</span>
                  <span className="px-3 py-1 border border-[#1A1A1A] text-[10px] uppercase tracking-widest text-[#1A1A1A]">Growth</span>
                  <span className="px-3 py-1 border border-[#1A1A1A] text-[10px] uppercase tracking-widest text-[#1A1A1A]">2025</span>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex justify-between items-end">
            <div className="flex gap-16">
              <div>
                <p className="text-[10px] uppercase tracking-wider opacity-50 mb-1 text-[#1A1A1A]">ID Number</p>
                <p className="text-xs font-semibold text-[#1A1A1A]">{formData.studentId || 'XXXXXXX'}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider opacity-50 mb-1 text-[#1A1A1A]">Major</p>
                <p className="text-xs font-semibold text-[#1A1A1A]">{formData.major || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[40px] font-serif leading-none italic text-[#1A1A1A]">01 <span className="text-xl font-sans not-italic opacity-20">/ 15</span></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 text-[#1A1A1A]/70 transition-colors">
      <label className="text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center">
        {label}
      </label>
      {children}
    </div>
  );
}

