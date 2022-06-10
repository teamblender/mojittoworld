import {
  Space,
  HighLight,
  SText,
  Item,
  Outlink,
} from "../../Components/Utility";
import benefit1a from "../Images/Contents/benefit1a.png";
import benefit1b from "../Images/Contents/benefit1b.png";
import benefit2 from "../Images/Contents/benefit2.png";
import benefit3 from "../Images/Contents/benefit3.png";
import benefit4 from "../Images/Contents/benefit4.png";

const RoadmapArray = [
  {
    state: 1,
    milestone: "코스터 구매 직후",
    benefit: (
      <>
        Welcome Gift<p></p>매거진 M & 칵테일 코스터
      </>
    ),
    direction: "l",
    img: [benefit1a, benefit1b],
    desc: (
      <>
        칵테일 코스터 구매자분들을 위해<p></p>
        감사의 마음을 가득 담아 준비한<p></p>
        <HighLight>Welcome Gift</HighLight>
        <Space></Space>Welcome Gift 안에는<p></p>두 가지 선물이 포함되어 있어요.
        <Space></Space>
        <Space></Space>
        <Item
          title={<HighLight>Magazine M</HighLight>}
          desc={
            <>
              모지또 제작 과정을 기록한<p></p>모지또 다큐멘터리 잡지
            </>
          }
        ></Item>
        <Space></Space>
        <Item
          title={<HighLight>Cocktail Coaster</HighLight>}
          desc={
            <>
              칵테일 코스터 NFT의<p></p>실물 칵테일 코스터
            </>
          }
        ></Item>
        <Space></Space>
        <Space></Space>
        <HighLight>
          Welcome Gift는<p></p>칵테일 코스터 최초 소유자에게만 드리는<p></p>
          한정판 선물인 점 참고해주세요!
        </HighLight>
        <Space></Space>
        <Space></Space>
        <SText>
          - 참고사항 -<p></p>
          <Outlink url="https://discord.gg/zgvQTyKyjK">
            모지또 칵테일 바 디스코드
          </Outlink>
          를 통해<p></p>구매자분들의 배송 주소를 확인하여<p></p>Welcome Gift를
          보내드릴 예정입니다.
          <p></p>-<p></p>자세한 내용은{" "}
          <Outlink url="https://discord.gg/zgvQTyKyjK">디스코드 채널</Outlink>의
          <p></p>안내를 참고해주세요.
        </SText>
      </>
    ),
  },
  {
    state: 2,
    milestone: "2022년 7월",
    benefit: (
      <>
        모지또 해외 버전<p></p>비공개 베타 초대
      </>
    ),
    direction: "r",
    img: [benefit2],
    desc: (
      <>
        2019년 국내 오픈 후<p></p>
        지금까지 쌓인 노하우를 바탕으로<p></p>
        완전히 새로운 모지또를 만들고 있어요!<Space></Space>
        많은 손님들이 제안주셨던<p></p>
        사진 추가, 쉐-킷 전 스토리 작성 기능을 포함한<p></p>
        완전히 리뉴얼된 모지또, 궁금하지 않으신가요?<p></p>
        <Space></Space>
        <HighLight>
          칵테일 코스터 구매자분은<p></p>
          새단장한 모지또를 해외 지점 공식 오픈 전에<p></p>가장 먼저 만나보실 수
          있답니다!
        </HighLight>
        <Space></Space>이 혜택은 해외 지점 오픈 전에만<p></p>
        드릴 수 있으니 놓치지 마셔요!
        <Space></Space>
        <SText>
          - 참고사항 -<p></p>
          <Outlink url="https://discord.gg/zgvQTyKyjK">
            모지또 칵테일 바 디스코드
          </Outlink>
          를 통해<p></p>
          코스터 구매자분들에게 모지또 해외 버전
          <p></p>
          체험 권한을 공유드릴 예정입니다.
          <p></p>-<p></p>자세한 내용은{" "}
          <Outlink url="https://discord.gg/zgvQTyKyjK">디스코드 채널</Outlink>의
          <p></p>안내를 참고해주세요.
        </SText>
      </>
    ),
  },
  {
    state: 2,
    milestone: "2023년 1분기",
    benefit: (
      <>
        모지또 서비스 내<p></p>코스터 NFT 테마 적용
      </>
    ),
    direction: "l",
    img: [benefit3],
    desc: (
      <>
        귀여운 모지또 칵테일 코스터를<p></p>
        지갑에만 넣고 다니면 아쉬울 거예요.<Space></Space>
        그래서 칵테일 코스터를<p></p>
        모지또 앱 안에서 볼 수 있는<p></p>
        테마 기능을 준비할 예정이에요.<Space></Space>
        <HighLight>
          내 칵테일 코스터 안의
          <p></p>
          나만의 하나뿐인 모지또를<p></p>앱 아이콘, 위젯 등에서 만나보세요!
        </HighLight>
        <Space></Space>
        <SText>
          - 참고사항 -<p></p>
          <Outlink url="https://discord.gg/zgvQTyKyjK">
            모지또 칵테일 바 디스코드
          </Outlink>
          를 통해<p></p>
          NFT 테마 기능이 출시되었을 시<p></p>안내드릴 예정입니다.
          <p></p>-<p></p>자세한 내용은{" "}
          <Outlink url="https://discord.gg/zgvQTyKyjK">디스코드 채널</Outlink>의
          <p></p>안내를 참고해주세요.
        </SText>
      </>
    ),
  },
  {
    state: 2,
    milestone: "2023년 4분기",
    benefit: (
      <>
        모지또 칵테일 바<p></p>VIP 티켓
      </>
    ),
    direction: "r",
    img: [benefit4],
    desc: (
      <>
        모지또와 함께 칵테일을 즐길 수 있는<p></p>
        오프라인 칵테일 바를 계획 중이에요!<Space></Space>
        <HighLight>
          이 모지또 칵테일 바의 VIP 티켓<p></p>
          칵테일 코스터 구매자분들에게 드립니다.
        </HighLight>
        <Space></Space>
        VIP 티켓을 소지한 분들에게는<p></p>
        전용 코스터와 웰컴 드링크 등<p></p>혜택을 드릴 예정이에요.
        <Space></Space>
        <SText>
          - 참고사항 -<p></p>
          VIP 혜택은 해외 지점 성과에 따라<p></p>
          변경될 수 있습니다.<p></p>-<p></p>자세한 내용은{" "}
          <Outlink url="https://discord.gg/zgvQTyKyjK">디스코드 채널</Outlink>의
          <p></p>안내를 참고해주세요.
        </SText>
      </>
    ),
  },
];

export default RoadmapArray;
