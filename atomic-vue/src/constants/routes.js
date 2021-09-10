import { strings } from "./strings";
import OverviewPage from "@pages/OverviewPage";
import LandingPage from "@pages/LandingPage";
import AtomsOverview from "@organisms/AtomsOverview";
import MoleculesOverview from "@organisms/MoleculesOverview";
import OrganismsOverview from "@organisms/OrganismsOverview";

export const routes = [
  { path: "/", name: strings.routes.landing.name, component: LandingPage },
  {
    path: `/${strings.routes.overview.name}`,
    name: strings.routes.overview.name,
    component: OverviewPage,
    children: [
      {
        path: strings.routes.overview.children.atoms.name,
        name: strings.routes.overview.children.atoms.name,
        component: AtomsOverview,
      },
      {
        path: strings.routes.overview.children.molecules.name,
        name: strings.routes.overview.children.molecules.name,
        component: MoleculesOverview,
      },
      {
        path: strings.routes.overview.children.organisms.name,
        name: strings.routes.overview.children.organisms.name,
        component: OrganismsOverview,
      },
    ],
  },
];
