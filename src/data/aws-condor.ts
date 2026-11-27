const revision = 'e004f0f59ce755abcb682a466adbea7643d373ee';
const source = `https://github.com/NyanPunch/2024_CloudComputing/blob/${revision}/aws/awsTest.java`;
export const awsCondor = {
  title: 'AWS·Condor 관리 도구',
  href: '/projects/aws-condor/',
  period: '2024.12',
  description: 'Java 콘솔에서 EC2 인스턴스와 AMI를 관리하고, SSH로 원격 Condor 상태를 확인하는 클라우드 컴퓨팅 수업 프로젝트입니다.',
  repository: 'https://github.com/NyanPunch/2024_CloudComputing',
  technologies: ['Java', 'AWS SDK for Java 1.x', 'Amazon EC2', 'AMI', 'SSH', 'HTCondor'],
  commands: [
    {number:'01',name:'인스턴스 목록',method:'listInstances()',description:'인스턴스 ID·AMI·유형·상태·모니터링 상태를 조회하고 nextToken으로 다음 페이지를 읽습니다.'},
    {number:'02',name:'가용 영역 조회',method:'availableZones()',description:'접근 가능한 가용 영역의 ID·리전·영역 이름을 출력합니다.'},
    {number:'03',name:'인스턴스 시작',method:'startInstance()',description:'입력한 인스턴스 ID로 StartInstances 요청을 보냅니다.'},
    {number:'04',name:'리전 조회',method:'availableRegions()',description:'리전 이름과 엔드포인트를 조회합니다.'},
    {number:'05',name:'인스턴스 중지',method:'stopInstance()',description:'입력한 인스턴스 ID로 StopInstances 요청을 보냅니다.'},
    {number:'06',name:'인스턴스 생성',method:'createInstance()',description:'선택한 AMI로 t2.micro 인스턴스 1개를 생성합니다. 보안 그룹·키 페어·Base64 인코딩한 User Data를 설정합니다.'},
    {number:'07',name:'인스턴스 재부팅',method:'rebootInstance()',description:'입력한 인스턴스 ID로 RebootInstances 요청을 보냅니다.'},
    {number:'08',name:'AMI 목록',method:'listImages()',description:'소유자 ID 필터로 AMI를 조회해 이미지 ID·이름·소유자를 출력합니다.'},
    {number:'09',name:'Condor 상태 조회',method:'condorStatus()',description:'EC2의 공인 DNS를 조회한 뒤 로컬 ssh 프로세스로 condor_status를 실행하고 표준 출력과 종료 코드를 읽습니다.'},
    {number:'10',name:'작업 노드 AMI 생성',method:'createSlaveImage()',description:'인스턴스에서 AMI를 만들고 15초 간격으로 상태를 조회해 available이 될 때까지 기다립니다.'},
  ],
  milestones: [
    {date:'12.02',title:'AMI 조회와 Condor 상태 확인',description:'이미지 목록 조회와 SSH를 통한 condor_status 확인을 README에 기록했습니다.'},
    {date:'12.03',title:'작업 노드 이미지 생성',description:'인스턴스를 기반으로 slave AMI를 생성하는 기능을 추가했습니다.'},
    {date:'12.04',title:'인스턴스 생성 설정 보강',description:'보안 그룹·키 페어·사용자 관련 설정을 수정하고 개별 인스턴스에서도 상태를 확인하도록 작업한 내용을 기록했습니다.'},
  ],
  sources: [
    {label:'프로젝트 개요와 개발 기록',description:'기능별 작업 일자와 변경 내용',url:`https://github.com/NyanPunch/2024_CloudComputing/blob/${revision}/README.md`},
    {label:'Java 콘솔과 전체 구현',description:'aws/awsTest.java',url:source},
    {label:'인스턴스 생성 설정',description:'createInstance() · AMI·인스턴스 유형·User Data·보안 그룹·키 페어',url:source+'#L316-L338'},
    {label:'SSH 상태 조회와 이미지 생성',description:'condorStatus() · createSlaveImage()',url:source+'#L381-L438'},
  ],
};
