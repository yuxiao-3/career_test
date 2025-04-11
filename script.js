// 题目数据结构：包含题目ID、类型、选项、正向答案
const questions = [
    { id: 1, type: 'radio', text: '拆装、修理电器或者玩具', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 2, type: 'radio', text: '开车', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 3, type: 'radio', text: '解数学题或玩数学游戏', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 4, type: 'radio', text: '观看或参加体育比赛或运动会', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 5, type: 'radio', text: '看电影中的文艺片', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 6, type: 'radio', text: '参加会计培训班', options: ['有兴趣', '没兴趣'], positive: '有兴趣' },
    { id: 7, type: 'radio', text: '制定计划', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 8, type: 'radio', text: '做木工', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 9, type: 'radio', text: '家居设计', options: ['有兴趣', '没兴趣'], positive: '有兴趣' },
    { id: 10, type: 'radio', text: '了解心理方面的知识', options: ['有兴趣', '没兴趣'], positive: '有兴趣' },
    { id: 11, type: 'radio', text: '动手做模型', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 12, type: 'radio', text: '在学生社团中担任职务', options: ['愿意', '不愿意'], positive: '愿意' },
    { id: 13, type: 'radio', text: '关注社会的政治经济发展', options: ['是', '否'], positive: '是' },
    { id: 14, type: 'radio', text: '撰写报告或拟写公务或商务信函', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 15, type: 'radio', text: '参加话剧或戏剧的排练和演出', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 16, type: 'radio', text: '参加学校、班级或社团组织的活动', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 17, type: 'radio', text: '抄写文件资料', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 18, type: 'radio', text: '演奏乐器', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 19, type: 'radio', text: '做手工艺品', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 20, type: 'radio', text: '检查与评价别人的工作', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 21, type: 'radio', text: '参加各种会议', options: ['有兴趣', '没兴趣'], positive: '有兴趣' },
    { id: 22, type: 'radio', text: '读科技图书和杂志', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 23, type: 'radio', text: '结交一些有名的人物', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 24, type: 'radio', text: '操作机器', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 25, type: 'radio', text: '调查了解土和金属等物质的成分', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 26, type: 'radio', text: '帮别人解决困难', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 27, type: 'radio', text: '参加科研小组或学习班', options: ['有兴趣', '没兴趣'], positive: '有兴趣' },
    { id: 28, type: 'radio', text: '制作图纸', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 29, type: 'radio', text: '学习速记或类似的技能', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 30, type: 'radio', text: '绘画或书法', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 31, type: 'radio', text: '欣赏音乐或戏剧', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 32, type: 'radio', text: '卖东西', options: ['有兴趣', '没兴趣'], positive: '有兴趣' },
    { id: 33, type: 'radio', text: '研究自己选择的特殊问题', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 34, type: 'radio', text: '做实验', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 35, type: 'radio', text: '照顾儿童', options: ['乐意', '不乐意'], positive: '乐意' },
    { id: 36, type: 'radio', text: '指导一个团体来达成某种目标', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 37, type: 'radio', text: '和大家一起出去郊游', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 38, type: 'radio', text: '整理信件、书籍、报告、记录等', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 39, type: 'radio', text: '上生物课', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 40, type: 'radio', text: '把桌子和房间整理得很干净', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 41, type: 'radio', text: '上物理或者化学课', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 42, type: 'radio', text: '摄影', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 43, type: 'radio', text: '了解文秘工作的相关知识技能', options: ['有兴趣', '没兴趣'], positive: '有兴趣' },
    { id: 44, type: 'radio', text: '说服或者鼓动别人做特定的事', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 45, type: 'radio', text: '记帐和检查自己的收支情况', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 46, type: 'radio', text: '结交新朋友', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 47, type: 'radio', text: '修理自行车', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 48, type: 'radio', text: '小说或诗歌', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 49, type: 'radio', text: '跳舞', options: ['会', '不会'], positive: '会' },
    { id: 50, type: 'radio', text: '独立地进行或完成一项调查研究', options: ['能', '不能'], positive: '能' },
    { id: 51, type: 'radio', text: '具有很强的销售能力', options: ['是', '否'], positive: '是' },
    { id: 52, type: 'radio', text: '参加二部或四部合唱，或者独唱', options: ['擅长', '不擅长'], positive: '擅长' },
    { id: 53, type: 'radio', text: '修理收音机等小的家用电器', options: ['会', '不会'], positive: '会' },
    { id: 54, type: 'radio', text: '在工作上指导和监督他人', options: ['能', '不能'], positive: '能' },
    { id: 55, type: 'radio', text: '从事事务性的工作', options: ['擅长', '不擅长'], positive: '擅长' },
    { id: 56, type: 'radio', text: '安排好会议或社团事务等活动', options: ['能', '不能'], positive: '能' },
    { id: 57, type: 'radio', text: '使用缝纫机', options: ['会', '不会'], positive: '会' },
    { id: 58, type: 'radio', text: '整理、保管文件和资料', options: ['擅长', '不擅长'], positive: '擅长' },
    { id: 59, type: 'radio', text: '使用网络和基本的办公软件', options: ['会', '不会'], positive: '会' },
    { id: 60, type: 'radio', text: '擅长绘画、素描或书法', options: ['擅长', '不擅长'], positive: '擅长' },
    { id: 61, type: 'radio', text: '具备作为领导者开创事业的勇气和能力', options: ['是', '否'], positive: '是' },
    { id: 62, type: 'radio', text: '做事时充满活力和热情', options: ['是', '否'], positive: '是' },
    { id: 63, type: 'radio', text: '邀请人、招待人', options: ['会', '不会'], positive: '会' },
    { id: 64, type: 'radio', text: '创作简单的乐曲', options: ['会', '不会'], positive: '会' },
    { id: 65, type: 'radio', text: '有向各种人解释沟通的能力', options: ['是', '否'], positive: '是' },
    { id: 66, type: 'radio', text: '曾担任过学生干部或社团负责人，并且干得不错', options: ['是', '否'], positive: '是' },
    { id: 67, type: 'radio', text: '至少具有表演、摄影、雕塑中的一项技能', options: ['是', '否'], positive: '是' },
    { id: 68, type: 'radio', text: '懂得真空管或晶体管的作用', options: ['是', '否'], positive: '是' },
    { id: 69, type: 'radio', text: '懂得至少一种科学研究方法', options: ['是', '否'], positive: '是' },
    { id: 70, type: 'radio', text: '使用显微镜', options: ['会', '不会'], positive: '会' },
    { id: 71, type: 'radio', text: '懂得万用表的使用方法', options: ['是', '否'], positive: '是' },
    { id: 72, type: 'radio', text: '打字很快', options: ['是', '否'], positive: '是' },
    { id: 73, type: 'radio', text: '给墙、家具或木制品刷漆', options: ['能', '不能'], positive: '能' },
    { id: 74, type: 'radio', text: '在短时间内对大量文件做分类处理', options: ['能', '不能'], positive: '能' },
    { id: 75, type: 'radio', text: '使用电钻、锉刀等木工工具', options: ['会', '不会'], positive: '会' },
    { id: 76, type: 'radio', text: '帮助护理病人和伤员', options: ['能', '不能'], positive: '能' },
    { id: 77, type: 'radio', text: '体察人心和帮助他人', options: ['能', '不能'], positive: '能' },
    { id: 78, type: 'radio', text: '与年长者或儿童相处', options: ['擅长', '不擅长'], positive: '擅长' },
    { id: 79, type: 'radio', text: '列举三种蛋白质多的食品', options: ['能', '不能'], positive: '能' },
    { id: 80, type: 'radio', text: '使用复印机和传真机', options: ['会', '不会'], positive: '会' },
    { id: 81, type: 'radio', text: '参加社会福利活动', options: ['经常', '很少'], positive: '经常' },
    { id: 82, type: 'radio', text: '演奏至少一种乐器', options: ['会', '不会'], positive: '会' },
    { id: 83, type: 'radio', text: '快速地记笔记和抄写文章', options: ['能', '不能'], positive: '能' },
    { id: 84, type: 'radio', text: '简单地修理家具、水管、电路保险丝等', options: ['能', '不能'], positive: '能' },
    { id: 85, type: 'radio', text: '为自己或集体做财务预算表', options: ['擅长', '不擅长'], positive: '擅长' },
    { id: 86, type: 'radio', text: '理解铀的裂变或者知道人造卫星为什么不落地', options: ['能', '不能'], positive: '能' },
    { id: 87, type: 'radio', text: '可以和大家一起友好相处地工作', options: ['是', '否'], positive: '是' },
    { id: 88, type: 'radio', text: '有效地利用自身的做法调动他人', options: ['能', '不能'], positive: '能' },
    { id: 89, type: 'radio', text: '写得一手好文章', options: ['是', '否'], positive: '是' },
    { id: 90, type: 'radio', text: '设计出漂亮的板报、服装或家具、工艺品等', options: ['能', '不能'], positive: '能' },
    { id: 91, type: 'radio', text: '健谈善辩，口才不错', options: ['是', '否'], positive: '是' },
    { id: 92, type: 'radio', text: '向领导提出建议或反映意见', options: ['能', '不能'], positive: '能' },
    { id: 93, type: 'radio', text: '参加学术相关的会议', options: ['经常', '很少'], positive: '经常' },
    { id: 94, type: 'radio', text: '修理自行车', options: ['会', '不会'], positive: '会' },
    { id: 95, type: 'radio', text: '解释简单的化学现象', options: ['能', '不能'], positive: '能' },
    { id: 96, type: 'radio', text: '看懂建筑设计图', options: ['能', '不能'], positive: '能' },
    { id: 97, type: 'radio', text: '地质学者', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 98, type: 'radio', text: '飞机驾驶员', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 99, type: 'radio', text: '科学杂志的编辑或作家', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 100, type: 'radio', text: '歌唱家', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 101, type: 'radio', text: '制片人', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 102, type: 'radio', text: '社会学者', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 103, type: 'radio', text: '人口普查登记员', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 104, type: 'radio', text: '行政主管', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 105, type: 'radio', text: '生物学者', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 106, type: 'radio', text: '汽车机械师', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 107, type: 'radio', text: ' 园艺师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 108, type: 'radio', text: ' 猎头顾问 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 109, type: 'radio', text: ' 银行营业员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 110, type: 'radio', text: ' 导游 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 111, type: 'radio', text: ' 法庭书记员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 112, type: 'radio', text: ' 公司经理 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 113, type: 'radio', text: ' 通信工程师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 114, type: 'radio', text: ' 照明师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 115, type: 'radio', text: ' 天文学者 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 116, type: 'radio', text: ' 个体工商业主 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 117, type: 'radio', text: ' 乐队指挥 / 演奏家 / 作曲家 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 118, type: 'radio', text: ' 画家、书法家 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 119, type: 'radio', text: ' 医学实验室的技术人员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 120, type: 'radio', text: ' 烹调师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 121, type: 'radio', text: ' 健身教练 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 122, type: 'radio', text: ' 会计师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 123, type: 'radio', text: ' 人类学者 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 124, type: 'radio', text: ' 电力工程师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 125, type: 'radio', text: ' 街道、工会或妇联干部 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 126, type: 'radio', text: ' 心理咨询员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 127, type: 'radio', text: ' 图书 / 档案管理员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 128, type: 'radio', text: ' 物业或社区服务人员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 129, type: 'radio', text: ' 电影电视演员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 130, type: 'radio', text: ' 环保监测员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 131, type: 'radio', text: ' 福利机构负责人 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 132, type: 'radio', text: ' 国家机关工作人员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 133, type: 'radio', text: ' 广告创意人员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 134, type: 'radio', text: ' 企业管理咨询师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 135, type: 'radio', text: ' 作家 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 136, type: 'radio', text: ' 服装设计师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 137, type: 'radio', text: ' 产品销售人员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 138, type: 'radio', text: ' 广告部主管 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 139, type: 'radio', text: ' 成本核算员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 140, type: 'radio', text: ' 报刊发行经理 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 141, type: 'radio', text: ' 打字员 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 142, type: 'radio', text: ' 摄影师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 143, type: 'radio', text: ' 化学家 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 144, type: 'radio', text: ' 中小学教师 ', options: [' 喜欢 ', ' 不喜欢 '], positive: ' 喜欢 ' },
    { id: 145, type:'score', text: ' 机械操作能力 ', min: 1, max: 5 },
    { id: 146, type:'score', text: ' 艺术创作能力 ', min: 1, max: 5 },
    { id: 147, type:'score', text: ' 科学研究能力 ', min: 1, max: 5 },
    { id: 148, type:'score', text: ' 解释表达能力 ', min: 1, max: 5 },
    { id: 149, type:'score', text: ' 商业洽谈能力 ', min: 1, max: 5 },
    { id: 150, type:'score', text: ' 事务执行能力 ', min: 1, max: 5 },
    { id: 151, type:'score', text: ' 体力技能 ', min: 1, max: 5 },
    { id: 152, type:'score', text: ' 音乐技能 ', min: 1, max: 5 },
    { id: 153, type:'score', text: ' 数学技能 ', min: 1, max: 5 },
    { id: 154, type:'score', text: ' 交际技能 ', min: 1, max: 5 },
    { id: 155, type:'score', text: ' 领导技能 ', min: 1, max: 5 },
    { id: 156, type:'score', text: ' 办公技能 ', min: 1, max: 5 }
];

// 职业类型与题目映射
const jobTypes = {
    研究型: [1, 3, 22, 27, 33, 34, 69, 86, 95, 97, 105, 113, 115, 119, 143, 147],
    实际型: [1, 2, 8, 24, 47, 53, 75, 84, 94, 106, 124, 145],
    社会型: [26, 35, 76, 77, 81, 125, 126, 131, 144],
    传统型: [6, 17, 38, 45, 55, 58, 72, 74, 85, 103, 122, 139, 140, 141],
    艺术型: [5, 18, 19, 30, 42, 48, 49, 60, 64, 82, 90, 100, 117, 118, 129, 133, 135, 136, 142],
    企业型: [12, 13, 20, 23, 36, 44, 51, 61, 65, 66, 87, 88, 91, 92, 101, 108, 112, 116, 134, 137, 138]
};

let currentPage = 1;
const questionsPerPage = 10; // 每页显示的题目数量

function generateQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const pageQuestions = questions.slice(startIndex, endIndex);

    pageQuestions.forEach(q => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `
            <p>${q.id}. ${q.text}</p>
            ${q.type === 'radio'? 
                q.options.map(opt => `<input type="radio" name="q${q.id}" value="${opt}"> ${opt}`).join(' ') :
                q.type ==='score'? createStarRating(q.id, q.min, q.max) : ''}
        `;
        container.appendChild(div);
    });

    checkAllAnswered();
}

function createStarRating(questionId, min, max) {
    const starRating = document.createElement('div');
    starRating.className ='star-rating';
    for (let i = min; i <= max; i++) {
        const star = document.createElement('span');
        star.className ='star';
        star.dataset.value = i;
        star.innerHTML = '★';
        star.addEventListener('click', function () {
            const score = parseInt(this.dataset.value);
            const allStars = starRating.querySelectorAll('.star'); // 修改这里获取星星元素
            allStars.forEach((s, index) => {
                const starIndex = parseInt(s.dataset.value);
                if (starIndex <= score) {
                    s.classList.add('filled');
                } else {
                    s.classList.remove('filled');
                }
            });
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = `q${questionId}`;
            input.value = score;
            starRating.appendChild(input); // 将隐藏输入框添加到starRating中
            checkAllAnswered();
        });
        starRating.appendChild(star);
    }
    return starRating.outerHTML;
}

function setStarRating(questionId, score) {
    const stars = document.querySelectorAll(`.star-rating [name="q${questionId}"]`);
    stars.forEach((star, index) => {
        if (index < score - 1) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = `q${questionId}`;
    input.value = score;
    const questionDiv = document.querySelector(`[name="q${questionId}"]`).parentNode;
    questionDiv.appendChild(input);
    checkAllAnswered();
}

function nextPage() {
    if (currentPage * questionsPerPage < questions.length) {
        currentPage++;
        generateQuestions();
        const prevPageBtn = document.getElementById('prevPageBtn');
        prevPageBtn.style.display = 'inline-block';
    }
    const nextPageBtn = document.getElementById('nextPageBtn');
    if (currentPage * questionsPerPage >= questions.length) {
        nextPageBtn.disabled = true;
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        generateQuestions();
        const nextPageBtn = document.getElementById('nextPageBtn');
        nextPageBtn.disabled = false;
    }
    const prevPageBtn = document.getElementById('prevPageBtn');
    if (currentPage === 1) {
        prevPageBtn.style.display = 'none';
    }
}

function checkAllAnswered() {
    const allQuestions = document.querySelectorAll('[name^="q"]');
    let allAnswered = true;
    allQuestions.forEach(question => {
        if (question.type === 'radio' &&!question.checked ||
            (question.type === 'hidden' && question.value === '')) {
            allAnswered = false;
        }
    });
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled =!allAnswered;
}

// 页面加载时生成题目
document.addEventListener('DOMContentLoaded', generateQuestions);

document.getElementById('nextPageBtn').addEventListener('click', nextPage);
document.getElementById('prevPageBtn').addEventListener('click', prevPage);

function calculateResult() {
    const scores = { 研究型: 0, 实际型: 0, 社会型: 0, 传统型: 0, 艺术型: 0, 企业型: 0 };
    
    // 遍历所有题目
    questions.forEach(q => {
        const input = document.querySelector(`[name="q${q.id}"]`);
        let score = 0;
        
        if (q.type === 'radio') {
            const selected = document.querySelector(`[name="q${q.id}"]:checked`);
            score = selected? (selected.value === q.positive? 1 : 0) : 0;
        } else if (q.type ==='score') {
            score = parseInt(input.value) || 0;
        }
        
        // 将得分加到对应的职业类型
        Object.keys(jobTypes).forEach(type => {
            if (jobTypes[type].includes(q.id)) {
                scores[type] += score;
            }
        });
    });
    
    showResult(scores);
}

function showResult(scores) {
    const resultDiv = document.getElementById('result');
    const scoresHtml = Object.entries(scores).map(([type, score]) => `
        <div class="score-item">
            <strong>${type}：</strong> ${score} 分
        </div>
    `).join('');
    
    const maxType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b]? a : b);
    const suggestions = {
        研究型: '研究型 职业兴趣倾向的人，通常具备以下特征：\n'+
            '擅长对各种现象进行观察、分析、判断和推理，喜欢与符号、概念、文字、抽象思考有关的活动；\n'+
            '是思想家而非实干家，抽象思维能力强，头脑聪明，思考理性、有逻辑，但有时不愿动手；\n'+
            '关注如何创造性的解决问题，能提出新的想法和策略，而不愿循规蹈矩；\n'+
            '求知欲强，知识渊博，有学识才能，但较不喜欢领导和竞争；\n'+
            '个性独立、温和、谨慎、保守、内向。\n适合研究型人的工作环境：\n通常需要运用复杂抽象的思考能力；\n'+
            '常常需要采用数学或科学的知识，来寻求问题的解决；\n不太需要处理复杂的人际关系，大多数情况下，必须独立解决工作上的问题；\n'+
            '不具有高度的结构化，不需要动手操作能力。\n可以优先考虑的职业：\n临床研究员、软件工程师、电子技术研发工程师、课程设计与开发人员 等\n',

        实际型: '实际型 职业兴趣倾向的人，通常具备以下特征：\n'+
            '动作敏捷，做事手脚灵活，具有较强的动手能力和动作协调能力；\n'+
            '很现实，重视物质，不是理想主义者，追求安定、舒适的生活，重视现在胜于重视未来；\n'+
            '不善言辞，喜欢用实际行动代替言语表达，不擅长与人交际；\n'+
            '情绪稳定，忍耐力强，给人的印象是诚实、谦和、节俭、脚踏实地；\n'+
            '思想较保守，对新鲜事物不太感兴趣，情感体验也不太丰富；\n'+
            '喜爱具体明确、需要动手操作的工作环境，对需要技术、体力的活动表现出浓厚的兴趣，较不喜欢需要社交、与人接触的活动。\n适合实际型人的工作环境：\n较多运用到身体的实际操作，需要具备机械方面才能、体力；\n'+
            '通常需要运用到某些特殊的技术，以便进行机器的修理、电子器材的维护、汽车的驾驶或动物的畜养等；\n'+
            '处理与具体有形的物体接触的问题比处理人际问题更重要；\n'+
            '容易造成生理伤害或意外事件。\n可以优先考虑的职业：\n录音师、建筑制图员/制图员、厨师、水利水电建筑工程师、水处理工程师、硬件工程师 等\n',
    
        社会型: '社会型 职业兴趣倾向的人，通常具备以下特征：\n'+
            '关心社会的公平和正义，往往有较强的社会责任感和人道主义倾向；\n'+
            '对人慷慨、仁慈，喜欢倾听和关心别人，能敏锐察觉别人的感受；\n'+
            '个性温暖、友善，乐于助人，善言谈，能与周围的人融洽的相处，令人信服；\n'+
            '在团体中，乐于与人合作，有责任感，不爱竞争；\n'+
            '喜欢从事与人接触的活动，关心人胜于关心物。\n适合社会型人的工作环境：\n鼓励人和人之间的和谐相待、互相帮助、和睦相处；\n'+
            '充满了有教无类的经验指导与交流、心理的沟通、灵性的扶持等，如提供信息、启迪、帮助、培训、开发或治疗等；\n'+
            '强调人类的核心价值，如理想、仁慈、友善和慷慨等。\n可以优先考虑的职业：\n大学教师、中学教师、小学教师、心理咨询师、客户关系管理员、公务员、外科医生、护士、高校辅导员 等\n',

        传统型: '传统型职业兴趣倾向的人，通常具备以下特征：\n'+
            '个性保守谨慎，尊重权威和规章制度，喜欢按部就班地办事；\n'+
            '工作踏实，忠诚可靠，遵守纪律，自我控制能力强，喜欢有秩序的、安稳的生活；\n'+
            '喜欢关注实际和细节情况，做事认真仔细，讲求精确，有秩序，有效率，有责任感；\n'+
            '习惯接受他人指挥和领导，愿意执行上级命令，乐于配合和服从，不习惯于自己对事情做出判断和决策，不喜欢改变、创新和冒险。\n可以优先考虑的职业：\n审计专员、财务会计/出纳、图书管理员、会计核算专员、预算分析师、打字员、秘书/助理、快递业务员、档案资料管理员 等\n',

        艺术型: '艺术型职业兴趣倾向的人，通常具备以下特征：\n'+
            '具有丰富的想象力和很强的创造力，乐于创造新颖、与众不同的成果；\n'+
            '对美的事物有敏锐的直觉，具有一定的艺术才能和个性，喜欢以各种艺术形式的创作来表现自己的个性，实现自身的价值；\n'+
            '做事理想化，凭直觉对事物做出判断，追求完美，不重实际；\n'+
            '个性热情、冲动，善于表达，感情丰富、敏感，容易情绪化；\n'+
            '喜欢自由自在、富有创意的工作环境，乐于独立思考、创作，不喜欢受人支配。\n可以优先考虑的职业：\n装潢设计师、演员、导演、主持人、化妆师、摄影师、作家 等\n',

        企业型: '企业型职业兴趣倾向的人，通常具备以下特征：\n'+
            '精力充沛，自信，个性外向积极、有冲劲，热情洋溢，富于冒险，喜爱竞争，支配欲强；\n'+
            '社交能力强，特别善于沟通协调，具有领导才能，能够影响、说服他人共同达到组织或个人的目标；\n'+
            '做事有组织、有计划，喜欢立刻采取行动，有时比较武断；\n'+
            '为人务实，喜欢追求权力、财富和地位，习惯以利益得失，权利、地位、金钱等来衡量做事的价值，做事有较强的目的性。\n可以优先考虑的职业：\n项目经理、房地产销售/售楼员、职业经理人、律师、拍卖师 等\n' 
    };
    
    resultDiv.innerHTML = `
    ${scoresHtml}
    <h3>职业建议</h3>
    <p>${suggestions[maxType] || '无相关建议'}</p>
`;

// 绘制雷达图
const ctx = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: Object.keys(scores),
        datasets: [{
            label: '职业兴趣得分',
            data: Object.values(scores),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true
            }
        }
    }
});

resultDiv.style.display = 'block';
}