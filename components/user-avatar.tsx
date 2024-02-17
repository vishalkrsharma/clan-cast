import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const UserAvatar = ({ src, className }: { src?: string; className?: string }) => {
  return (
    <Avatar className={cn('h-7 w-7', className)}>
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default UserAvatar;
