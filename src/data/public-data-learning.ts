const notebook = (repo: string, revision: string, file: string) =>
  `https://github.com/NyanPunch/${repo}/blob/${revision}/${file.split('/').map(encodeURIComponent).join('/')}`;
const analysisRevision = 'f8fad0f5182a5cbcf605829ba91eeb9533e9975d';
const scienceRevision = '5c99294657614e3b8ab02189f1ade0d19eb7868d';
const basicsRevision = '485e99250711c80ddaf5318cd0caed5f060a6a5a';

export const publicDataLearning = {
  title: '공공데이터 분석과 시각화',
  href: '/projects/public-data-analysis/',
  period: '2023 — 2024',
  description: '공공데이터를 읽고, 정리하고, 그래프로 설명하는 연습. 세 저장소에 남긴 분석·시각화와 전처리 기초 학습을 모았습니다.',
  technologies: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Folium'],
  repositories: [
    {
      year: '2023', name: '2023_Data_Analysis', label: '분석과 시각화의 기본 흐름',
      context: '에이블런 데이터 분석·시각화 교육 실습',
      description: 'Python과 pandas 기초부터 날짜·범주형 데이터 처리, 집계와 여러 그래프 표현까지 실습했습니다. 서울시 공공자전거, 코로나19 현황, 물가, 지하철 승하차 등 주제별 노트북이 있습니다.',
      topics: ['CSV 읽기·자료형 변환·결측치 확인', 'groupby·pivot_table·시계열 집계', 'Matplotlib·Seaborn 시각화'],
      links: [
        { label: '서울시 공공자전거 분석', url: notebook('2023_Data_Analysis', analysisRevision, '14. 서울시 공공자전거_실습.ipynb') },
        { label: '서울시 코로나19 현황 분석', url: notebook('2023_Data_Analysis', analysisRevision, '13. 서울시 코로나 19현황 분석_실습.ipynb') },
        { label: '서울시 물가정보 분석', url: notebook('2023_Data_Analysis', analysisRevision, '15 서울시 물가정보 분석_실습.ipynb') },
        { label: '지하철 승하차현황 분석', url: notebook('2023_Data_Analysis', analysisRevision, '16 지하철 승하차현황 분석_실습.ipynb') },
      ],
    },
    {
      year: '2023', name: 'DataScience2023', label: '공공데이터로 질문하고 비교하기',
      context: '네이버커넥트 × 모두의연구소 학습 과제',
      description: '의료기관 데이터에서 지역별 약국·동물병원을 집계하고, 노인·치매병원을 지도에 표시했습니다. 건강검진 자료의 연령대별 통계와 해외 직접판매 자료의 연도·분기 처리도 다뤘습니다.',
      topics: ['조건 필터링·지역별 빈도와 비율', 'Folium 지도와 위치 마커', '연령대 코드 변환·기술통계'],
      links: [
        { label: '전국 시도별 약국 집계', url: notebook('DataScience2023', scienceRevision, '2Week_M_Q1_김경민.ipynb') },
        { label: '약국과 동물병원 분포 비교', url: notebook('DataScience2023', scienceRevision, '2Week_M_Q2_김경민.ipynb') },
        { label: '노인·치매병원 지도 표시', url: notebook('DataScience2023', scienceRevision, '2Week_M_Q4_김경민.ipynb') },
        { label: '건강검진 자료의 연령대별 통계', url: notebook('DataScience2023', scienceRevision, '3Week_M_Q1_김경민.ipynb') },
      ],
    },
    {
      year: '2024', name: '2024_DataAnalysis', label: '분석에 필요한 전처리 기초 보강',
      context: '데이터 분석 학습 노트북·과제',
      description: 'NumPy 배열 생성·슬라이싱·브로드캐스팅과 pandas 전처리를 연습했습니다. Titanic 예제 데이터로 필터링·정렬, 결측값·이상값, 문자열 처리 방법을 정리한 기초 학습입니다.',
      topics: ['NumPy 배열 연산과 형태 변환', '결측값 확인·대체·보간, IQR 이상값 처리', '문자열 분리·치환과 조건 검색'],
      links: [
        { label: 'NumPy 배열 연습', url: notebook('2024_DataAnalysis', basicsRevision, 'Report#1.ipynb') },
        { label: '필터링과 정렬', url: notebook('2024_DataAnalysis', basicsRevision, '어쩌DA-Ch3-1.ipynb') },
        { label: '결측값 처리', url: notebook('2024_DataAnalysis', basicsRevision, '어쩌DA-Ch3-2.ipynb') },
        { label: '이상값 처리', url: notebook('2024_DataAnalysis', basicsRevision, '어쩌DA-Ch3-3.ipynb') },
        { label: '문자열 데이터 처리', url: notebook('2024_DataAnalysis', basicsRevision, '어쩌DA-Ch3-4.ipynb') },
      ],
    },
  ],
};
