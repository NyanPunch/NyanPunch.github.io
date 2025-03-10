import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "주정차 밀집 구역의 차대 사람 사고 예방을 위한 차량 사각지대 공유 시스템",
    description: "졸업논문 - 차량 사각지대 공유 시스템",
    fullDescription: "주정차 밀집 구역에서 발생하는 차대 사람 사고를 예방하기 위한 시스템을 개발했습니다. 서로의 사각지대 정보를 실시간으로 공유하여 보행자와 차량의 안전을 확보하는 솔루션입니다.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Python", "OpenCV", "YOLO", "Deep Learning", "Real-time Processing"],
    features: [
      "실시간 정보 공유 네트워크",
      "실시간 보행자 이동 방향 감지",
      "이상 행동 정의",
      "보행자, 주행차량 위험 경고 시스템"
    ],
    github: "https://github.com/NyanPunch/Sight_Sharing_System",
    role: "비전 알고리즘 개발 & 프로젝트 관리",
    period: "2023.09 - 2024.11",
    references: [
      {
        type: "paper",
        title: "(포스터) 차량 사각지대 공유 시스템",
        url: "https://drive.google.com/file/d/1HQsTl_UpinPQI1-VutAQPtF_W40MvhWi/view?usp=sharing"
      },
      {
        type: "demo",
        title: "시스템 데모 영상",
        url: "https://youtu.be/t48VE4WMqFA"
      },
      {
        type: "paper",
        title: "(작성중)실시간 교통상황 탐지를 활용한 불법 주정차 밀집 구역 연계 사고 방지 시스템",
        url: ""
      }
    ]
  },
  {
    id: 2,
    title: "딥러닝 기반 음악 기호 인식 프로젝트",
    description: "딥러닝 기반 음악 기호 인식 프로젝트",
    fullDescription: "악보 이미지에서 음악 기호를 자동으로 인식하고 디지털화하는 시스템을 개발했습니다. 딥러닝 모델을 활용하여 높은 정확도의 인식률을 달성했습니다.",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Python", "TensorFlow", "OpenCV", "Image Processing"],
    features: [
      "악보 이미지 전처리",
      "음악 기호 자동 인식",
      "MIDI 파일 변환"
    ],
    github: "https://github.com/NyanPunch/DeepWatershedDetection",
    role: "딥러닝 모델 개발 & 데이터 전처리",
    period: "2023.09 - 2023.12",
    references: [
      {
        type: "paper",
        title: "Method of Deep Learning-Based Music Symbol Detection Using Watershed Algorithm",
        url: "https://drive.google.com/file/d/12oVUwVQohDuVaiP4nbKnToTIHgnw8W3I/view?usp=sharing"
      },
      {
        type: "presentation",
        title: "프로젝트 발표 자료",
        url: "https://drive.google.com/file/d/1d9phmAVC2rgiP89b6BS6_bMSmISjPMT1/view?usp=sharing"
      }
    ]
  },
  {
    id: 3,
    title: "초콜릿 체험관 포스기 데이터 분석 프로젝트",
    description: "초콜릿 체험관 포스기 데이터 분석 프로젝트",
    fullDescription: "초콜릿 체험관의 POS 데이터를 분석하여 매출 패턴과 고객 행동을 분석했습니다. 이를 통해 마케팅 전략 수립에 기여했습니다.",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Python", "Pandas", "SQL", "Data Visualization"],
    features: [
      "매출 데이터 분석",
      "고객 행동 패턴 분석",
      "개선 방안 제시"
    ],
    //github: "https://github.com/NyanPunch/pos-data-analysis",
    role: "데이터 분석 & 시각화",
    period: "2023.12.22 - 2024.01.05(2주)",
    references: [
      {
        type: "presentation",
        title: "분석 결과 보고서",
        url: "https://docs.google.com/presentation/d/e/2PACX-1vR9OuZHYY7_6gPvAhoC1dIoalybu5FGv9lvb8O5_7bt9_hN-xNTl7FtOdrVNOCpuPizlZGiw8r6m9DQ/pub?start=false&loop=false&delayms=3000"
      }
    ]
  },
  {
    id: 4,
    title: "새 프로젝트",
    description: "AI 기반 제품 품질 검사 자동화 시스템",
    fullDescription: "제조 공정에서 AI와 컴퓨터 비전을 활용하여 제품의 품질을 자동으로 검사하는 시스템을 개발했습니다. 실시간 불량 검출과 분석 기능을 통해 생산성 향상에 기여했습니다.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Python", "TensorFlow", "OpenCV", "MongoDB", "Flask"],
    features: [
      "실시간 품질 검사",
      "AI 기반 불량 검출",
      "데이터 시각화 대시보드",
      "품질 리포트 자동 생성"
    ],
    github: "https://github.com/NyanPunch/smart-factory-qc",
    role: "비전 시스템 개발 & 백엔드 개발",
    period: "2021.09 - 2022.02",
    references: [
      {
        type: "video",
        title: "시스템 시연 영상",
        url: "https://example.com/demo-video"
      },
      {
        type: "demo",
        title: "웹 대시보드 데모",
        url: "https://example.com/dashboard-demo"
      }
    ]
  }
];
