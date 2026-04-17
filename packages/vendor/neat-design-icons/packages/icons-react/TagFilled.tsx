// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TagFilledSVG from '../icons-svg/lib/TagFilled'
import Icon, { type BaseIconProps } from '../components'

const TagFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TagFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TagFilled.displayName = 'TagFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TagFilled)