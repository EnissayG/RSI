import { Link, type LinkProps } from 'react-router';
import { scrollToTop } from '../utils/scrollToTop';

type ScrollLinkProps = LinkProps & {
  onNavigate?: () => void;
};

/** Lien interne qui remonte en haut de page au clic (menu mobile inclus). */
export function ScrollLink({ onClick, onNavigate, ...props }: ScrollLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        scrollToTop();
        onNavigate?.();
        onClick?.(e);
      }}
    />
  );
}
