import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface MigrationJobState {
  step: number;
  projectId: string;
}

export type MeetingCaseReducer<P = any> = CaseReducer<MigrationJobState, PayloadAction<P>>;

export type MeetingReducers = {
  [K: string]: MeetingCaseReducer;
} & {
  updateStep: MeetingCaseReducer<number>;
  selectProjectId: MeetingCaseReducer<string>;
};
