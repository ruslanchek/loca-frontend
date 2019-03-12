import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';
import { TableHeader } from '../table/TableHeader';
import { TableHeaderCol } from '../table/TableHeaderCol';
import { TableRow } from '../table/TableRow';
import { TableCol } from '../table/TableCol';
import { AvatarProject } from '../ui/AvatarProject';
import { TableTitle } from '../table/TableTitle';
import { TableSubtitle } from '../table/TableSubtitle';
import { ChevronRight } from 'react-feather';
import { EProjectStatus, ProjectStatus } from '../ui/ProjectStatus';
import { Readyness } from '../ui/Readyness';
import { EProjectType, ProjectType } from '../ui/ProjectType';
import { TimeValue } from '../ui/TimeValue';
import { DateValue } from '../ui/DateValue';
import { NumberValue } from '../ui/NumberValue';

interface IProps {}

interface IProject {
  id: number;
  avatar: string;
  title: string;
  type: EProjectType;
  status: EProjectStatus;
  lastEdit: Date;
  readyness: number;
  basePhrases: number;
  baseWords: number;
  issues: number;
}

const PROJECTS: IProject[] = [
  {
    id: 1,
    avatar: 'https://xsnapp.com/favicons/apple-touch-icon-120x120.png',
    title: 'Xsnapp.com APP',
    type: EProjectType.WebApplication,
    status: EProjectStatus.Ready,
    lastEdit: new Date(Date.now() - 8039202),
    readyness: 78,
    basePhrases: 1020,
    baseWords: 7406,
    issues: 21,
  },

  {
    id: 2,
    avatar: 'https://xsnapp.com/favicons/apple-touch-icon-120x120.png',
    title: 'Xsnapp.com Landing',
    type: EProjectType.WebSite,
    status: EProjectStatus.TranslationInProgress,
    lastEdit: new Date(Date.now() - 2242945),
    readyness: 92,
    basePhrases: 207,
    baseWords: 2098,
    issues: 3,
  },

  {
    id: 3,
    avatar: 'https://xsnapp.com/favicons/apple-touch-icon-120x120.png',
    title: 'Xsnapp.com Emails',
    type: EProjectType.Promo,
    status: EProjectStatus.Archive,
    lastEdit: new Date(Date.now() - 3237495),
    readyness: 100,
    basePhrases: 20,
    baseWords: 133,
    issues: 0,
  },
];

const TABLE_SIZE = [
  '60px',
  'calc(36% - 100px)',
  '16%',
  '16%',
  '16%',
  '16%',
  '40px',
];

export class ProjectsList extends PureComponent<IProps> {
  render() {
    const {} = this.props;

    return (
      <div className={tableCn}>
        <TableHeader>
          <TableHeaderCol width={TABLE_SIZE[0]} />
          <TableHeaderCol width={TABLE_SIZE[1]}>Title</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[2]}>Status</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[3]}>Last changes</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[4]}>Progress</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[5]}>Weight</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[6]} />
        </TableHeader>

        {PROJECTS.map(project => (
          <TableRow className={rowCn}>
            <TableCol
              width={TABLE_SIZE[0]}
              alignItems="center"
              justifyContent="center"
            >
              <AvatarProject size={40} src={project.avatar} />
            </TableCol>
            <TableCol width={TABLE_SIZE[1]}>
              <TableTitle>{project.title}</TableTitle>
              <TableSubtitle>
                <ProjectType type={EProjectType.WebSite} />
              </TableSubtitle>
            </TableCol>
            <TableCol width={TABLE_SIZE[2]}>
              <TableTitle>
                <ProjectStatus status={project.status} />
              </TableTitle>
              <TableSubtitle>Available to edit</TableSubtitle>
            </TableCol>
            <TableCol width={TABLE_SIZE[3]}>
              <TableTitle>
                <TimeValue value={project.lastEdit} />
              </TableTitle>
              <TableSubtitle>
                <DateValue value={project.lastEdit} />
              </TableSubtitle>
            </TableCol>
            <TableCol width={TABLE_SIZE[4]}>
              <TableTitle className={readynessCn}>
                <i>
                  <Readyness size={11} percent={project.readyness} />
                </i>
                <span>{project.readyness}%</span>
              </TableTitle>
              <TableSubtitle>
                <NumberValue value={project.baseWords} /> issues
              </TableSubtitle>
            </TableCol>
            <TableCol width={TABLE_SIZE[5]}>
              <TableTitle>
                <NumberValue value={project.basePhrases} />
              </TableTitle>
              <TableSubtitle>
                <NumberValue value={project.baseWords} /> words
              </TableSubtitle>
            </TableCol>
            <TableCol
              justifyContent="flex-start"
              alignItems="flex-end"
              width={TABLE_SIZE[6]}
            >
              <span className={cx(actionArrow, 'action-arrow')}>
                <ChevronRight />
              </span>
            </TableCol>
          </TableRow>
        ))}
      </div>
    );
  }
}

const tableCn = css`
  margin-top: 20px;
`;

const readynessCn = css`
  display: flex;
  align-items: center;

  > i {
    margin-right: 1ex;
    display: flex;
    align-items: center;
  }
`;

const actionArrow = css`
  position: relative;
  top: -2px;
  color: ${COLORS.GRAY_DARK.toString()};
  transition: transform 0.2s;
`;

const rowCn = css`
  &:hover {
    .action-arrow {
      transform: translateX(5px);
    }
  }
`;
