// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f6qpwMfQ9K36cBNMUgXnEq
// Component: 9B_FueXK-n
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: f6qpwMfQ9K36cBNMUgXnEq/projectcss
import sty from "./PlasmicGlowOnHover.module.css"; // plasmic-import: 9B_FueXK-n/css

export type PlasmicGlowOnHover__VariantMembers = {
  unnamedVariant: "unnamedVariant";
};
export type PlasmicGlowOnHover__VariantsArgs = {
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
};
type VariantPropType = keyof PlasmicGlowOnHover__VariantsArgs;
export const PlasmicGlowOnHover__VariantProps = new Array<VariantPropType>(
  "unnamedVariant"
);

export type PlasmicGlowOnHover__ArgsType = {};
type ArgPropType = keyof PlasmicGlowOnHover__ArgsType;
export const PlasmicGlowOnHover__ArgProps = new Array<ArgPropType>();

export type PlasmicGlowOnHover__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultGlowOnHoverProps {
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicGlowOnHover__RenderFunc(props: {
  variants: PlasmicGlowOnHover__VariantsArgs;
  args: PlasmicGlowOnHover__ArgsType;
  overrides: PlasmicGlowOnHover__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "unnamedVariant",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.unnamedVariant
          : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        "" as const
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGlowOnHover__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGlowOnHover__VariantsArgs;
    args?: PlasmicGlowOnHover__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGlowOnHover__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGlowOnHover__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicGlowOnHover__ArgProps,
          internalVariantPropNames: PlasmicGlowOnHover__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicGlowOnHover__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGlowOnHover";
  } else {
    func.displayName = `PlasmicGlowOnHover.${nodeName}`;
  }
  return func;
}

export const PlasmicGlowOnHover = Object.assign(
  // Top-level PlasmicGlowOnHover renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicGlowOnHover
    internalVariantProps: PlasmicGlowOnHover__VariantProps,
    internalArgProps: PlasmicGlowOnHover__ArgProps
  }
);

export default PlasmicGlowOnHover;
/* prettier-ignore-end */
