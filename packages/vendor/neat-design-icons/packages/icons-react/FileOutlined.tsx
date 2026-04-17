// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileOutlinedSVG from '../icons-svg/lib/FileOutlined'
import Icon, { type BaseIconProps } from '../components'

const FileOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileOutlined.displayName = 'FileOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileOutlined)