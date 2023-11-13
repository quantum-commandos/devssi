/**
 * Joins the comma separated values
 *
 * @param args takes comma separated values
 * @returns join all string with the space added
 */

export function join(...args: any) {
  return args.filter(Boolean).join(" ");
}
