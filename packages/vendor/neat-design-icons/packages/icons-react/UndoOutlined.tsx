// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UndoOutlinedSVG from '../icons-svg/lib/UndoOutlined'
import Icon, { type BaseIconProps } from '../components'

const UndoOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UndoOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UndoOutlined.displayName = 'UndoOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UndoOutlined)