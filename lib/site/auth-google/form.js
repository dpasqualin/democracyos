import t from 't-component';
import o from 'component-dom';
import config from '../../config/config';
import title from '../../title/title';
import View from '../../view/view';
import template from './template.jade';

export default function form (ctx, next) {

  // FIXME: I want both google and facebook sign in to be available, but
  // DemocracyOS will only load either this or facebook template. So I copied
  // this template to auth-facebook, and therefore I'm disabling completely
  // this one. There should be a better way to do this.
  return next();

  if (!config.googleSignin) return next();

  // Build signin view with options
  let view = new View(template);

  // Display section content
  o(document.body).addClass('auth-google-form-page');

  // Update page's title
  title(t('signin.login'));

  // Render signin-page into content section
  view.replace('#content');
}
