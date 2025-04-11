// 题目数据结构：包含题目ID、类型、选项、正向答案
const questions = [
    { id: 1, type: 'radio', text: '拆装、修理电器或者玩具', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    { id: 2, type: 'radio', text: '开车', options: ['喜欢', '不喜欢'], positive: '喜欢' },
    // ... 省略其他题目（共156题）
    { id: 145, type: 'score', text: '机械操作能力', min: 1, max: 5 },
    // ... 省略其他打分题（145-156题）
];

// 职业类型与题目映射
const jobTypes = {
    研究型: [1, 3, 22, 27, 33, 34, 69, 86, 95, 97, 105, 113, 115, 119, 143, 147],
    实际型: [1, 2, 8, 24, 47, 53, 75, 84, 94, 106, 124, 145],
    // 补充其他类型的题目列表
};
function generateQuestions() {
    const container = document.getElementById('questionsContainer');
    questions.forEach(q => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `
            <p>${q.id}. ${q.text}</p>
            ${q.type === 'radio' ? 
                q.options.map(opt => `<input type="radio" name="q${q.id}" value="${opt}"> ${opt}`).join(' ') :
                q.type === 'score' ? `<input type="number" name="q${q.id}" min="${q.min}" max="${q.max}">` : ''}
        `;
        container.appendChild(div);
    });
}

// 页面加载时生成题目
document.addEventListener('DOMContentLoaded', generateQuestions);
function calculateResult() {
    const scores = { 研究型: 0, 实际型: 0, 社会型: 0, 传统型: 0, 艺术型: 0, 企业型: 0 };
    
    // 遍历所有题目
    questions.forEach(q => {
        const input = document.querySelector(`[name="q${q.id}"]`);
        let score = 0;
        
        if (q.type === 'radio') {
            const selected = document.querySelector(`[name="q${q.id}"]:checked`);
            score = selected ? (selected.value === q.positive ? 1 : 0) : 0;
        } else if (q.type === 'score') {
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
    
    const maxType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const suggestions = {
        研究型: '适合科研、数据分析类工作，如科学家、程序员。',
        实际型: '适合技术操作类工作，如工程师、机械师。',
        // 补充其他类型的建议
    };
    
    resultDiv.innerHTML = `
        ${scoresHtml}
        <h3>职业建议</h3>
        <p>${suggestions[maxType] || '无相关建议'}</p>
    `;
    resultDiv.style.display = 'block';
}