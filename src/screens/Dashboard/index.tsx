import React from 'react';
import * as S from './styles';

export interface DashBoardProps {}

const Dashboard: React.FC<DashBoardProps> = () => {
	return (
		<S.Container>
			<S.Title>Dashboard</S.Title>
		</S.Container>
	);
};

export default Dashboard;
