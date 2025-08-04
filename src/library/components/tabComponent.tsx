import type { TabProps } from "../interfaces/tabProps";

export const TabComponent = (tabProps: TabProps) => {
  return (
    <div className="bg-white shadow border border-gray-100 p-8 text-gray-700 rounded-lg -mt-2">
      {tabProps.tabContent}
    </div>
  );
}

export default TabComponent;