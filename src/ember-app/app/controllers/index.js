import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat7.caption'),
          title: i18n.t('forms.application.sitemap.postamat7.title'),
          children: [{
            link: 'i-i-s-postamat7-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-пользователь-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-postamat7-транзакция-l',
            caption: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-транзакция-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-postamat7-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-служба-доставки-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat7-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-логистика-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat7-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-постамат-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-postamat7-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat7.i-i-s-postamat7-хранение-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})