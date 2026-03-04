# 墨境守城 · 开发 Demo

> 中式水墨塔防游戏，基于微信小程序 + TypeScript + Canvas 2D

## 环境要求

- 微信开发者工具 >= 1.06
- Node.js >= 16（可选，用于本地 TypeScript 类型检查）

## 快速开始

```bash
# 1. 克隆仓库
git clone https://github.com/GodDu/tafang-game.git

# 2. 用微信开发者工具打开项目根目录

# 3. 在 project.config.json 中填入你的 appid

# 4. 点击「编译」即可预览
```

## 游戏核心流程

```
白天(准备，不限时)
  └─ 玩家点击「天色将晚，备战迎敌」
        └─ 黄昏(12s 水墨过渡动画)
              └─ 黑夜(波次战斗，怪物从右侧入侵)
                    └─ 所有波次清空
                          └─ 黎明(8s 结算，获得灵气)
                                └─ 回到白天
```

## 文件说明

| 路径 | 说明 |
|------|------|
| `src/core/GameLoop.ts` | 主循环，requestAnimationFrame 驱动，限帧保护 |
| `src/core/DayNightCycle.ts` | 昼夜四阶段状态机（day/dusk/night/dawn） |
| `src/core/WaveManager.ts` | 波次生成、Boss概率曲线、雷击/封印技能逻辑 |
| `src/render/Renderer.ts` | Canvas 2D 渲染器（背景/路径/主塔/塔/敌人） |
| `src/render/InkEffect.ts` | 水墨粒子特效 + 昼夜叠加层 + 技能特效 |
| `src/entities/towers/Tower.ts` | 防御塔实体类，含升级/分支/攻击计时逻辑 |
| `src/entities/monsters/Monster.ts` | 怪物数据接口定义 |
| `src/entities/traps/Trap.ts` | 陷阱实体类 |
| `src/data/monsters.json` | 5只普通怪 + 6只Boss完整数据 |
| `src/data/towers.json` | 5种防御塔数据 |
| `src/data/levels.json` | 3章关卡 + 无尽模式配置 |
| `GDD.md` | 游戏设计文档（全量） |

## 怪物/Boss 一览

| 类型 | 名称 | 解锁夜晚 | 特殊能力 |
|------|------|---------|---------|
| 普通 | 影蛊 / 厉鬼 / 傀儡兵 / 墨蛟 | 第1夜 | 各有特色属性 |
| 精英 | 冥灯鬼 | 第3夜 | 飞行，免疫地面陷阱 |
| Boss | **夔牛** | 第3夜 | 雷鸣震荡，致盲塔3s |
| Boss | **饕餮** | 第5夜 | 吞噬塔回血15% |
| Boss | **混沌** | 第7夜 | 混沌域使塔随机瞄准 |
| Boss | **穷奇** | 第8夜 | 诅咒使塔沉默60s |
| Boss | **九婴** | 第10夜 | 九命：可复活8次 |
| Boss | **梼杌** | 第12夜 | 无视路径强行冲撞 |

## 待接入功能

- [ ] 图片资源（塔/技能图标）替换占位文字
- [ ] 塔攻击判定逻辑（射程检测 + 伤害计算）
- [ ] 路径寻路算法（A* 或预设路点）
- [ ] Three.js 3D Boss 模型渲染层
- [ ] 音效系统（古琴BGM + 技能音效）
- [ ] 多关卡章节选择界面
- [ ] 本地存档（wx.setStorage）

## License

MIT
