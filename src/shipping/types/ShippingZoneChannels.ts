/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShippingZoneFilterInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: ShippingZoneChannels
// ====================================================

export interface ShippingZoneChannels_shippingZones_edges_node {
  __typename: "ShippingZone";
  id: string;
  name: string;
}

export interface ShippingZoneChannels_shippingZones_edges {
  __typename: "ShippingZoneCountableEdge";
  node: ShippingZoneChannels_shippingZones_edges_node;
}

export interface ShippingZoneChannels_shippingZones {
  __typename: "ShippingZoneCountableConnection";
  edges: ShippingZoneChannels_shippingZones_edges[];
}

export interface ShippingZoneChannels {
  shippingZones: ShippingZoneChannels_shippingZones | null;
}

export interface ShippingZoneChannelsVariables {
  filter?: ShippingZoneFilterInput | null;
}
