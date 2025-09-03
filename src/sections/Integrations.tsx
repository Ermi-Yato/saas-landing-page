// ----------------------------------------------------
// INTEGRATIONS SECTION
// ----------------------------------------------------

import { Tag } from "@/components/Tag"
import figmaIcon from "@/assets/images/figma-logo.svg"
import notionIcon from "@/assets/images/notion-logo.svg"
import slackIcon from "@/assets/images/slack-logo.svg"
import framerIcon from "@/assets/images/framer-logo.svg"
import githubIcon from "@/assets/images/github-logo.svg"
import relumeIcon from "@/assets/images/relume-logo.svg"
import IntegrationCol from "@/components/IntegrationCol"

const integrations = [
  { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
  { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
  { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
  { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
  { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
  { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];

// to use it in itegrations column component
export type integrationType = typeof integrations

export default function Integrations() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 items-center lg:gap-96">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl mt-8">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-lg text-white/50 mt-4">Layers seamlessly connects with your favorite tools, making it easy to plug into any workflow and collaborate across platforms.</p>
          </div>

          <div>
            <div className="mt-8 lg:mt-0 h-[420px] lg:h-[800px] overflow-hidden md:grid md:grid-cols-2 md:gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationCol integrations={integrations} />
              <IntegrationCol integrations={integrations.slice().reverse()} className="hidden md:flex" isReversed={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
