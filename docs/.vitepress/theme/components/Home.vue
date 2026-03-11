<template>
  <div class="pharmaclaw-home">
    <!-- Hero 区域 -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-grid"></div>
      <div class="hero-content">
        <img class="hero-lobster" src="/resource/1-mech-lobster.png" alt="PharmaClaw 战甲龙虾" />
        <h1 class="hero-title">为制药人装备数字战甲</h1>
        <p class="hero-tagline">制药智能化的终极武装</p>
        <p class="hero-subtitle">让智能贯穿制药全链路，让每一位从业者拥有"超能力"</p>
        <a href="/blog/" class="cta-button">了解更多 →</a>
      </div>
    </section>

    <!-- 核心能力 -->
    <section class="content-section">
      <div class="section-header">
        <h2 class="section-title">核心能力</h2>
        <p class="section-desc">三大核心能力，全方位武装制药人</p>
      </div>
      
      <div class="capability-grid">
        <div class="capability-card accent-cyan">
          <div class="capability-icon">🦞</div>
          <h3 class="capability-title">制药人的专属龙虾装备</h3>
          <p class="capability-desc">全链路 AI 助手，武装你的每一个工作环节。从研发到生产，武装到牙齿。</p>
        </div>
        
        <div class="capability-card accent-purple">
          <div class="capability-icon">🔐</div>
          <h3 class="capability-title">权限如甲，安全相随</h3>
          <p class="capability-desc">精细化角色权限，企业级数据隔离。数据不越界，权限不越位。</p>
        </div>
        
        <div class="capability-card accent-blue">
          <div class="capability-icon">📊</div>
          <h3 class="capability-title">每一操作，皆可追溯</h3>
          <p class="capability-desc">完整操作留痕，GxP 合规无忧。审计无忧，合规无虞。</p>
        </div>
      </div>
    </section>

    <!-- 技能 Skills -->
    <section class="content-section section-alt">
      <div class="section-header">
        <h2 class="section-title">技能 Skills</h2>
        <p class="section-desc">制药行业专属 AI 技能包矩阵</p>
      </div>
      
      <div class="skill-grid">
        <div class="skill-card" v-for="skill in skills" :key="skill.name">
          <div class="skill-header">
            <span class="skill-icon">{{ skill.icon }}</span>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
          <p class="skill-desc">{{ skill.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 技术优势 -->
    <section class="content-section">
      <div class="section-header">
        <h2 class="section-title">技术优势</h2>
        <p class="section-desc">八大技术优势，打造制药行业智能新标杆</p>
      </div>
      
      <div class="feature-grid">
        <div class="feature-item" v-for="feature in features" :key="feature.title">
          <span class="feature-icon">{{ feature.icon }}</span>
          <div class="feature-content">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section class="content-section section-alt">
      <div class="section-header">
        <h2 class="section-title">应用场景</h2>
        <p class="section-desc">四大核心场景，全面覆盖制药业务</p>
      </div>
      
      <div class="scenario-grid">
        <div class="scenario-card" :class="scenario.class" v-for="scenario in scenarios" :key="scenario.title">
          <img class="scenario-img" :src="scenario.img" :alt="scenario.title" />
          <h3 class="scenario-title">{{ scenario.title }}</h3>
          <p class="scenario-problem"><strong>痛点：</strong>{{ scenario.problem }}</p>
          <p class="scenario-solution"><strong>方案：</strong>{{ scenario.solution }}</p>
        </div>
      </div>
    </section>

    <!-- 关于 -->
    <section class="content-section">
      <div class="about-section">
        <div class="about-content">
          <p class="about-identity">PharmaClaw — 来自博普智库的制药行业智能中枢</p>
          <p class="about-vision"><strong>愿景：</strong>让智能深入每一个制药环节、贯穿每一条业务链</p>
          <p class="about-mission"><strong>使命：</strong>用前沿AI技术重塑制药生产力，让每一位从业者拥有"超能力"</p>
          <p class="about-metaphor">不仅是助手，更是制药人的<b>数字战甲</b>与<b>智能中枢</b></p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <p class="footer-brand">🦞 PharmaClaw</p>
      <p>📍 来自博普智库 | © 2026 PharmaClaw. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
const skills = [
  { icon: '🧪', name: 'eTMF 智能归档', desc: '自动识别临床试验文件，智能分类与元数据填写' },
  { icon: '📋', name: '研发项目管理', desc: '自然语言创建任务、自动生成日报与进度汇总' },
  { icon: '📊', name: '数据洞察分析', desc: '自然语言查询数据库，AI自动编写 SQL 与可视化' },
  { icon: '📝', name: '文档智能处理', desc: 'PDF/Word/Excel 全能解析，自动摘要与关键提取' },
  { icon: '🔬', name: '法规合规审查', desc: 'GMP/GCP/GLP 智能审核，合规风险实时预警' },
  { icon: '💊', name: '药品注册助手', desc: '注册流程自动化，申报文档智能撰写' },
  { icon: '🔒', name: '权限审计管家', desc: '细粒度权限管控，全链路操作留痕可追溯' },
  { icon: '🌐', name: '跨系统协同', desc: '连接 ERP/CRM/OA/飞书/钉钉，智能工作流编排' },
]

const features = [
  { icon: '📜', title: 'GxP 合规保障', desc: '符合 GMP/GCP/GLP 规范要求，让合规成为本能' },
  { icon: '🔒', title: '企业级安全防护', desc: '端到端加密，零数据泄露风险，打造固若金汤的安全壁垒' },
  { icon: '🖥️', title: '私有化部署', desc: '数据不出内网，安全可控，让智能在自有安全体系中成长' },
  { icon: '⏰', title: '7×24 智能值守', desc: '永不疲倦的数字化员工，永远在线的智能守卫' },
  { icon: '🤖', title: '多模型融合', desc: '博采众长，让最合适的模型做最擅长的事' },
  { icon: '🔌', title: 'MCP 工具协议', desc: '像 USB 一样连接企业万般工具' },
  { icon: '🧠', title: '知识中枢', desc: '企业私有知识库，让AI真正"懂"你的业务' },
  { icon: '☁️', title: '混合部署架构', desc: '云端推理 + 本地检索，兼顾性能与安全的黄金平衡' },
]

const scenarios = [
  { title: '🧪 实验室数据管理', problem: '实验记录堆积如山，找不到、分类难', solution: '智能识别实验记录，自动归档与分析', img: '/resource/3-lab.png', class: 'scenario-lab' },
  { title: '🏭 生产流程自动化', problem: '生产数据孤岛，异常发现滞后', solution: '实时监控生产数据，异常预警与流程优化', img: '/resource/4-factory.png', class: 'scenario-factory' },
  { title: '📋 质量合规监控', problem: '合规检查耗时耗力，偏差追踪困难', solution: 'GMP 合规检查，偏差分析与 CAPA 追踪', img: '/resource/5-qc.png', class: 'scenario-qc' },
  { title: '📁 文档智能归档', problem: 'eTMF 归档繁琐，人工分类易错', solution: 'eTMF 全自动化归档，智能分类与检索', img: '/resource/6-archive.png', class: 'scenario-archive' },
]
</script>

<style scoped>
.pharmaclaw-home {
  background: #0a0a1a;
  min-height: 100vh;
}
</style>
