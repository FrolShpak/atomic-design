import { makeStyles, createStyles } from "@material-ui/styles";
import { ReactNode } from "react";

const useStyles = makeStyles(
  () =>
    createStyles({
      navigation: {},
      content: {},
    }),
  { name: "overview-template" }
);

export type OverviewTemplateProps = {
  navigation: ReactNode;
  content: ReactNode;
};

const OverviewTemplate = (props: OverviewTemplateProps) => {
  const styles = useStyles();
  const { navigation, content } = props;
  return (
    <div>
      <div className={styles.navigation}>{navigation}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default OverviewTemplate;
