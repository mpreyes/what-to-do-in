export interface EventSearch {
  location?: string; // A location name to use in filtering the search results.
  date?: string; //  Currently supported labels include: "All", "Future", "Past", "Today", "Last Week", "This Week", "Next week", and months by name, e.g. "October".
  category?: string; // Limit the search results to this category ID.
  ex_category?: string; // Exclude search results from including this category ID. A list of categories may be specified separated by commas.
  within?: string; // If within is set and the "location" parameter resolves to a specific geolocation, the search will be restricted to the specified radius. I
  units?: string; // One of "mi" or "km", the units of the "within" parameter. Defaults to "mi".
  count_only?: boolean; // If count_only is set, an abbreviated version of the output will be returned. Only total_items and search_time elements are included in the result.
  sort_order?: string; // One of 'popularity', 'date', or 'relevance'. Default is 'relevance'. (
  sort_direction?: string; // One of 'ascending' or 'descending'. Default varies by sort_order.
  page_size?: number; // The desired number of results per page
  page_number?: number;
  image_sizes?: string; // A comma separted list of image_sizes desired. See Faq for list of possible image sizes. f
  languages?: number;
  mature?: string;
  include?: string;
  change_multi_day_start?: boolean;
}
