import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface ComponentsProjectMedia extends Schema.Component {
  collectionName: 'components_components_project_medias';
  info: {
    displayName: 'Project Media';
    icon: 'landscape';
  };
  attributes: {
    Small: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    Media: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.link': ComponentsLink;
      'components.project-media': ComponentsProjectMedia;
    }
  }
}
