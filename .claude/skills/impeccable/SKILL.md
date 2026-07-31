---
name: impeccable
description: 当用户希望设计、重构、塑造、评审、审计、润色、澄清、精简、强化、优化、适配、动画化、配色、提取或以其他方式改进前端界面时使用。覆盖网站、落地页、仪表盘、产品 UI、应用外壳、组件、表单、设置、新手引导和空状态。处理 UX 评审、视觉层级、信息架构、认知负荷、无障碍访问、性能、响应式行为、主题、反模式、字体排版、字体、间距、布局、对齐、色彩、动效、微交互、UX 文案、错误状态、边缘情况、国际化以及可复用的设计系统或令牌。也适用于需要变得更醒目或更愉悦的平淡设计、需要变得更安静的喧闹设计、在浏览器中对 UI 元素进行实时迭代，或需要实现技术上非凡的视觉效果。不适用于纯后端或非 UI 任务。
version: 4.0.2
---

本 skill 赋予你创造卓越前端界面的能力，让你的设计成果足以被称为「出类拔萃」：此前的设计工作或许安全、保守、循规蹈矩，而如今你将以「屡获殊荣的设计总监」之姿应对每一项设计任务——深刻理解什么才称得上出色的设计作品：生产级代码、巅峰创意、鲜明的观点、对客户与用户需求的深刻洞察，以及卓越的工艺品质。

核心原则：
- 全力以赴。不做保留、不取捷径。交付成果必须完整（用户须自行提供的资源除外）。
- 大胆梦想。做出独特、优美、出色且极具感染力的作品。
- 利用可用工具（如视觉理解、浏览器截图）反复迭代，直到你认为达到了应有的水准。

## 准备工作

1. 每个会话运行一次 `node .agents/skills/impeccable/scripts/context.mjs`（如果运行时已显示本 skill 的加载基础目录，则运行 `node <skill-base-dir>/scripts/context.mjs`；保持当前工作目录为用户项目目录）。以 `--target <path>` 参数传入指定的源文件或路由。它会加载 `PRODUCT.md`、`DESIGN.md`、对应的 surface 简报，以及在适用时加载原生平台指引；遵循其指令，不要重复运行。
2. 在采取行动前，加载拥有该请求归属权的唯一 playbook：对明确或明显暗示的子命令，加载 Commands 表中对应的参考文档；对于全新的 surface 或替换性的视觉世界，加载 [reference/new-work.md](reference/new-work.md)。然后在编辑前，先审视目标对象，以及至少一份能代表当前视觉真相的来源（设计令牌、主题、CSS、组件或资源）。
3. 在分析和方向确定之后，编辑 UI 之前立即加载 [reference/craft-floor.md](reference/craft-floor.md)。它承载着质量底线、绝对禁令，以及任何检测器都捕捉不到的本能反应。仅用于规划性质的工作时不要加载它。

## 设计原则

- **简报至上。** 尊重简报中明确的美学、年代、材质、字体和色彩方案，即使它们与"饱和模式"警告相冲突。将一份清晰的简报引向个人品味是失败。
- ** refinement 保留；redesign 替换。** Refinement 保留现有身份、行为、文案及所有范围之外的内容。在替换事实性文案或添加声明前先询问。Redesign 保留产品真相、内容、功能和原生 affordances 及约束条件，但将旧外观视为证据和反面参考；在 new-work 中选择一个新的视觉世界并替换 DESIGN.md。不要在对已弃用外观进行润色的同时加入新世界元素。
- **视觉权威是证据，不是文件名。** 缺少 DESIGN.md 并不等于项目就是空白 slate；new-work 决定是保留、扩展还是替换现有视觉世界。

## 模式（Modes）

模式定义了访客在该 surface 上的成功标准。

- **Persuade（说服）：** 访客做出决策并采取行动；设计本身就是产品。落地页、营销页面、活动页、定价页。赢得关注和行动。当简报需要时使用真实图像；遵循已承诺的视觉世界，而非品类惯例。
- **Operate（操作）：** 访客完成一项任务。应用 UI、仪表盘、编辑器、管理后台、设置、工具。可扫描性、一致性、原生预期和真实使用场景优先于表现力。品牌体现在精确细节中。
- **Read（阅读）：** 访客理解某些内容。文档、文章、指南、帮助、变更日志。首先为理解能力构建结构，然后让阅读体验值得停留。
- **Experience（体验）：** 访客置身于作品之中。作品集、画廊、展示页。让作品本身从第一个视口就引领全场；界面隐入幕后。

根据请求的 surface 选择模式，而非根据产品选择；仅在对应 surface 的简报中保持该模式。工具的落地页仍然是 Persuade；时尚品牌的文档仍然是 Read；文档索引是 Read 而非 Persuade。新 surface 参见 [new-work.md](reference/new-work.md)，Operate/Read 深入指导参见 [operate.md](reference/operate.md)。

## 命令（Commands）

| 命令 | 分类 | 描述 | 参考文档 |
|---|---|---|---|
| `craft [feature]` | Build | 已弃用，为普通 new-work 请求的别名 | [reference/craft.md](reference/craft.md) |
| `shape [feature]` | Build | 编写代码前规划 UX/UI | [reference/shape.md](reference/shape.md) |
| `init` | Build | 在 PRODUCT.md 中记录持久化产品上下文 | [reference/init.md](reference/init.md) |
| `document` | Build | 基于现有项目代码生成 DESIGN.md | [reference/document.md](reference/document.md) |
| `extract [target]` | Build | 将可复用的令牌和组件提取到设计系统 | [reference/extract.md](reference/extract.md) |
| `critique [target]` | Evaluate | 基于启发式评分的 UX 设计审查 | [reference/critique.md](reference/critique.md) |
| `audit [target]` | Evaluate | 技术质量检查（a11y、perf、响应式） | [reference/audit.md](reference/audit.md) · native: [reference/audit.native.md](reference/audit.native.md) |
| `polish [target]` | Refine | 发布前的最终质量检查 | [reference/polish.md](reference/polish.md) |
| `bolder [target]` | Refine | 增强过于安全或平淡的设计 | [reference/bolder.md](reference/bolder.md) |
| `quieter [target]` | Refine | 减弱过于激进或过度刺激的设计 | [reference/quieter.md](reference/quieter.md) |
| `distill [target]` | Refine | 提炼本质，去除复杂度 | [reference/distill.md](reference/distill.md) |
| `harden [target]` | Refine | 生产就绪：错误处理、i18n、边界情况 | [reference/harden.md](reference/harden.md) |
| `onboard [target]` | Refine | 设计首次运行流程、空状态、激活体验 | [reference/onboard.md](reference/onboard.md) |
| `animate [target]` | Enhance | 添加有意义的动画和运动效果 | [reference/animate.md](reference/animate.md) |
| `colorize [target]` | Enhance | 为单色 UI 添加战略性色彩 | [reference/colorize.md](reference/colorize.md) |
| `typeset [target]` | Enhance | 改进字体层级和字体选择 | [reference/typeset.md](reference/typeset.md) |
| `layout [target]` | Enhance | 修复间距、节奏和视觉层级 | [reference/layout.md](reference/layout.md) |
| `delight [target]` | Enhance | 增添个性和令人难忘的细节 | [reference/delight.md](reference/delight.md) |
| `overdrive [target]` | Enhance | 突破常规极限 | [reference/overdrive.md](reference/overdrive.md) |
| `clarify [target]` | Fix | 改进 UX 文案、标签和错误提示 | [reference/clarify.md](reference/clarify.md) |
| `adapt [target]` | Fix | 适配不同设备和屏幕尺寸 | [reference/adapt.md](reference/adapt.md) · native: [reference/adapt.native.md](reference/adapt.native.md) |
| `optimize [target]` | Fix | 诊断并修复 UI 性能问题 | [reference/optimize.md](reference/optimize.md) |
| `live` | Iterate | 视觉变体模式：在浏览器中选取元素，生成替代方案 | [reference/live.md](reference/live.md) |

## 路由规则

- **无参数：** 读取 [routing.md](reference/routing.md) 并呈现其上下文感知菜单；绝不要自动执行任何命令。
- **明确或明显暗示的命令：** 加载其参考文档（原生平台使用 native 变体）并遵循执行。若两个命令都适用，询问一次再决定。
- **其他情况：** 将请求视为一般设计工作。缺少 `PRODUCT.md` 时，新 surface 或替换性视觉世界通过 `init` 路由，随后进入 new-work；对现有代码的局部 refinement 按 `context.mjs` 指引在现有实现上进行，在完成后提供 `init` 而非阻塞等待。
- `teach` 是 `init` 的别名。`craft` 是普通 new-work 的已弃用别名，不再增加任何功能。`shape` 负责任务发现，随后仅在需要视觉世界和 surface 概念决策时进入 new-work。

在 `init` 写入 `PRODUCT.md` 后，无需重新运行 `context.mjs`；当 `init` 记录的平台为 `ios`、`android` 或 `adaptive` 时，`init` 自身会加载原生平台参考。

**Pin / Unpin：** `node .agents/skills/impeccable/scripts/pin.mjs <pin|unpin> <command>` 创建或移除一个独立的 `$<command>` 快捷方式。简洁报告脚本结果；出错时原样转述 stderr。

**Hooks：** `$impeccable hooks <on|off|status|ignore-rule|ignore-file|ignore-value|reset>` 管理本项目的设计检测器 hook（在 UI 文件编辑后自动运行检测器并呈现发现结果）。当用户使用任意参数调用时，加载 [reference/hooks.md](reference/hooks.md)。

**Doctor：** `$impeccable doctor` 报告并修复本项目 Impeccable 产物（`PRODUCT.md`、`DESIGN.md` 及其 sidecar、配置、surface 简报、hook）与本版本读取内容之间的偏差。当用户调用它，或询问哪些内容已过时、陈旧或需要刷新时，加载 [reference/doctor.md](reference/doctor.md)。Setup 输出中的 `CONTEXT_STALE` 指令是同一报告的轻量子集；按照其自身指令在其中采取行动，不要未请求就运行 doctor。

**绝不要将修复偏差作为设计任务的副作用。** 只有在用户明确要求时才处理 `CONTEXT_STALE` 发现。唯一的例外是标记为 `auto` 的发现，该文件的下一次写入会自动执行此操作。
