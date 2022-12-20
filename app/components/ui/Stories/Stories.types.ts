import { FunctionComponentElement } from 'react';
import { ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';

export interface StoryContainerProps extends CommonProps {
  images: Array<string>;
  visible?: boolean | undefined;
  isShowReply?: boolean | undefined;
  duration?: number | undefined;
  barStyle?: BarStyleProps | undefined;
  headerComponent?: FunctionComponentElement<CommonProps> | undefined;
  userProfile?: UserProps | undefined;
  replyView?: ReplyProps | undefined;
  footerComponent?: FunctionComponentElement<CommonProps> | undefined;
  onComplete: Function;
}

export interface CommonProps {
  images?: Array<string>;
  duration?: number | undefined;
  containerStyle?: ViewStyle;
  enableProgress?: boolean | undefined;
  imageStyle?: ImageStyle;
}

export interface BarStyleProps {
  barActiveColor?: string;
  barInActiveColor?: string;
  barHeight?: number;
  barWidth?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
}

export interface UserProps {
  userImage?: ImageSourcePropType | undefined;
  userName?: string | undefined;
  userMessage?: string | undefined;
  imageArrow?: ImageSourcePropType | undefined;
  onImageClick?: Function | undefined;
}

export interface ReplyProps {
  isShowReply: boolean | undefined;
  onReplyTextChange: Function | undefined;
  onReplyButtonClick: Function | undefined;
}
