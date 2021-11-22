/* eslint-disable prefer-rest-params */
export function requiredArgs(required: number, args: IArguments) {
  if (args.length < required) {
    throw new TypeError(
      required +
        ' argument' +
        (required > 1 ? 's' : '') +
        ' required, but only ' +
        args.length +
        ' present'
    );
  }
}
export function toDate(argument: Date | number): Date {
  requiredArgs(1, arguments);

  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (typeof argument === 'object' && argStr === '[object Date]')) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if (
      (typeof argument === 'string' || argStr === '[object String]') &&
      typeof console !== 'undefined'
    ) {
      console.warn(
        "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
      );
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

export function differenceInCalendarYears(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number
): number {
  requiredArgs(2, arguments);

  const dateLeft = toDate(dirtyDateLeft);
  const dateRight = toDate(dirtyDateRight);

  return dateLeft.getFullYear() - dateRight.getFullYear();
}
