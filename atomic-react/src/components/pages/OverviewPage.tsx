import OverviewContent from "../organisms/OverviewContent";
import OverviewNavigation from "../organisms/OverviewNavigation";
import OverviewTemplate, {
  OverviewTemplateProps,
} from "../templates/OverviewTemplate";

const OverviewPage = () => {
  const templateProps: OverviewTemplateProps = {
    navigation: <OverviewNavigation />,
    content: <OverviewContent />,
  };
  return <OverviewTemplate {...templateProps} />;
};

export default OverviewPage;
