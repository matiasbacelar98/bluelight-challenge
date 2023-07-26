import Show from '../../Show';
import logo from '../../../assets/svg/logo.svg';
import logoLight from '../../../assets/svg/logo-light.svg';

export default function Logo({ isDark = true }) {
  return (
    <Show when={isDark} fallback={<img src={logoLight} alt="easebank logo" />}>
      <img src={logo} alt="easebank logo" />
    </Show>
  );
}
