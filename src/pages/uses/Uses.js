import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="description description description description description description description description description description description description description description "
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use Visual Studio Code as my text editor, with the Atom One Dark
                    theme and Operator Mono as my typeface of choice.
                  </ListItem>
                  <ListItem>
                    I use Visual Studio Code as my text editor, with the Atom One Dark
                    theme and Operator Mono as my typeface of choice.
                  </ListItem>
                  <ListItem>
                    I use Visual Studio Code as my text editor, with the Atom One Dark
                    theme and Operator Mono as my typeface of choice.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use Visual Studio Code as my text editor, with the Atom One Dark
                    theme and Operator Mono as my typeface of choice.
                  </ListItem>
                  <ListItem>
                    I use Visual Studio Code as my text editor, with the Atom One Dark
                    theme and Operator Mono as my typeface of choice.
                  </ListItem>
                  <ListItem>
                    I use Visual Studio Code as my text editor, with the Atom One Dark
                    theme and Operator Mono as my typeface of choice.
                  </ListItem>
                  <ListItem>
                    I use Visual Studio Code as my text editor, with the Atom One Dark
                    theme and Operator Mono as my typeface of choice.
                  </ListItem>
                  <ListItem>
                    I use Visual Studio Code as my text editor, with the Atom One Dark
                    theme and Operator Mono as my typeface of choice.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>name</TableHeadCell>
                    <TableCell>info</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>name</TableHeadCell>
                    <TableCell>info</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>name</TableHeadCell>
                    <TableCell>info</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>name</TableHeadCell>
                    <TableCell>info</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>name</TableHeadCell>
                    <TableCell>info</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>name</TableHeadCell>
                    <TableCell>info</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>name</TableHeadCell>
                    <TableCell>info</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>name</TableHeadCell>
                    <TableCell>info</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>name</TableHeadCell>
                    <TableCell>info</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
