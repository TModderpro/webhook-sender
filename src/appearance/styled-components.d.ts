/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-empty-interface */

import "styled-components"
import { Theme } from "./types/Theme"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
