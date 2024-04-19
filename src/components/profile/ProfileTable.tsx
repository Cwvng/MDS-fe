import React from 'react';
import { Col, Divider, Row } from 'antd';
import { ProfileItem } from './type.tsx';

interface ProfileProps {
  profile: any;
  tableInfo: ProfileItem[];
}

export const ProfileTable: React.FC<ProfileProps> = ({ profile, tableInfo }) => {
  return (
    <>
      {tableInfo.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <Divider className="m-0" />}
          <Row className="flex justify-between my-1">
            <Col>{item.label}</Col>
            <Col>
              <span className="font-medium">{profile[item.key]}</span>
            </Col>
          </Row>
        </React.Fragment>
      ))}
    </>
  );
};
