import Show from '../../Show';
import logo from '../../../assets/svg/logo.svg';
import logoLight from '../../../assets/svg/logo-light.svg';

export default function Logo({ isDark = true }) {
  return (
    <Show
      when={isDark}
      fallback={
        <a href="/">
          <img src={logoLight} alt="easebank logo" />
        </a>
      }
    >
      <a href="/">
        <img src={logo} alt="easebank logo" />
      </a>
    </Show>
  );
}
