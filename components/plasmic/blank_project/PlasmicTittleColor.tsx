// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f6qpwMfQ9K36cBNMUgXnEq
// Component: 46Gh6UehMw
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
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: f6qpwMfQ9K36cBNMUgXnEq/projectcss
import sty from "./PlasmicTittleColor.module.css"; // plasmic-import: 46Gh6UehMw/css

export type PlasmicTittleColor__VariantMembers = {};
export type PlasmicTittleColor__VariantsArgs = {};
type VariantPropType = keyof PlasmicTittleColor__VariantsArgs;
export const PlasmicTittleColor__VariantProps = new Array<VariantPropType>();

export type PlasmicTittleColor__ArgsType = {};
type ArgPropType = keyof PlasmicTittleColor__ArgsType;
export const PlasmicTittleColor__ArgProps = new Array<ArgPropType>();

export type PlasmicTittleColor__OverridesType = {
  root?: p.Flex<typeof Embed>;
};

export interface DefaultTittleColorProps {
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

function PlasmicTittleColor__RenderFunc(props: {
  variants: PlasmicTittleColor__VariantsArgs;
  args: PlasmicTittleColor__ArgsType;
  overrides: PlasmicTittleColor__OverridesType;
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

  return (
    <Embed
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
      code={'<div class="loader1">loading...</div>' as const}
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
  root: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTittleColor__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTittleColor__VariantsArgs;
    args?: PlasmicTittleColor__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTittleColor__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTittleColor__ArgsType,
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
          internalArgPropNames: PlasmicTittleColor__ArgProps,
          internalVariantPropNames: PlasmicTittleColor__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTittleColor__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTittleColor";
  } else {
    func.displayName = `PlasmicTittleColor.${nodeName}`;
  }
  return func;
}

export const PlasmicTittleColor = Object.assign(
  // Top-level PlasmicTittleColor renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTittleColor
    internalVariantProps: PlasmicTittleColor__VariantProps,
    internalArgProps: PlasmicTittleColor__ArgProps
  }
);

export default PlasmicTittleColor;
/* prettier-ignore-end */
