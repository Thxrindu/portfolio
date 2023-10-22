import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import React, { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Timeline.module.css';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { BsMortarboard, BsFillBuildingsFill } from 'react-icons/bs';
import { Heading } from 'components/Heading';
import { DecoderText } from 'components/DecoderText';

// const ProfileText = ({ visible, titleId }) => (
//   <Fragment>
//     <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
//       <DecoderText text="Hi there" start={visible} delay={500} />
//     </Heading>
//     <Text className={styles.description} data-visible={visible} size="l" as="p">
//       I’m Tharindu, about and description pending I’m Tharindu, about and description
//       pending I’m Tharindu, about and description pending I’m Tharindu, about and
//       description pending I’m Tharindu, about and description pending I’m Tharindu
//       <Link href="/uses">tools and technologies </Link>.
//     </Text>
//     <Text className={styles.description} data-visible={visible} size="l" as="p">
//       I’m Tharindu, about and description pending I’m Tharindu, about and description
//       pending
//       <Link href="/projects/volkihar-knight"> 3rd project</Link>. I’m always down for
//       hearing about new projects, so feel free to drop me a line.
//     </Text>
//   </Fragment>
// );

export const TimelineExp = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <div className={styles.expSection}>
                <Heading
                  className={styles.title}
                  data-visible={visible}
                  level={3}
                  id={titleId}
                >
                  <DecoderText text="Experience" start={visible} delay={500} />
                </Heading>
              </div>

              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #00e5ff' }}
                  date="2022 April - 2022 September"
                  iconStyle={{ background: 'black', color: '#fff' }}
                  icon={<BsFillBuildingsFill />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Software Developer - Intern
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Digital Micro Services
                  </h4>
                  <p>
                    Engaged in maintaining existing software based on Java and Angular
                  </p>
                  <p>
                    Contributed to the maintenance process of the Australian
                    telecommunication software applications
                  </p>
                  <p>Agile working environment</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #00e5ff' }}
                  date="2023 January - present"
                  iconStyle={{ background: 'black', color: '#fff' }}
                  icon={<BsFillBuildingsFill />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Software Engineer - Intern
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">Syntax Genie</h4>
                  <p>Engaged in the development of Learning Management Systems</p>
                  <p>
                    Contributed to the maintenance process of the existing software
                    applications
                  </p>
                  <p>Agile working environment</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
