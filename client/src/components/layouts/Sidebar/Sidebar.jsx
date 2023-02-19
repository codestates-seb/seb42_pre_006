import React from "react";
import { MdRemoveRedEye, MdSearch } from "react-icons/md";
import Button from "../../UI/Button";
import SidebarWidget from "./SidebarWidget";

function Sidebar() {
  return (
    <aside>
      <SidebarWidget>
        <SidebarWidget.Box title="The Overflow Blog" color="yellow">
          <SidebarWidget.ListItem type="blogs">
            Monitoring debt builds up faster than software teams can pay it off
          </SidebarWidget.ListItem>
          <SidebarWidget.ListItem type="blogs">
            Because the only thing worse than building internal tools is
            maintaining them...
          </SidebarWidget.ListItem>
        </SidebarWidget.Box>
        <SidebarWidget.Box title="Featured on Meta" color="yellow">
          <ul>
            <SidebarWidget.ListItem type="meta">
              Ticket smash for [status-review] tag: Part Deux
            </SidebarWidget.ListItem>
            <SidebarWidget.ListItem type="meta">
              We've added a "Necessary cookies only" option to the cookie
              consent popup
            </SidebarWidget.ListItem>
            <SidebarWidget.ListItem type="overflow">
              We’ve made changes to our Privacy Notice for Collectives™
            </SidebarWidget.ListItem>
            <SidebarWidget.ListItem type="overflow">
              The [amazon] tag is being burninated
            </SidebarWidget.ListItem>
            <SidebarWidget.ListItem type="overflow">
              Microsoft Azure Collective launch and proposed tag changes
            </SidebarWidget.ListItem>
            <SidebarWidget.ListItem type="overflow">
              Temporary pocy: ChatGPT is banned
            </SidebarWidget.ListItem>
          </ul>
        </SidebarWidget.Box>
      </SidebarWidget>
      <SidebarWidget>
        <SidebarWidget.Box title="Watched Tags">
          <div className="text-center">
            <MdSearch className="text-4xl text-primary mx-auto mb-3" />
            <p className="text-xs text-gray-400">
              Watch tags to curate your list of questions.
            </p>
            <Button
              size="sm"
              variant="secondary"
              icon={<MdRemoveRedEye />}
              className="mt-4"
            >
              Watch a tag
            </Button>
          </div>
        </SidebarWidget.Box>
      </SidebarWidget>
      <SidebarWidget>
        <SidebarWidget.Box title="Ignored Tags">
          <div className="text-center">
            <Button size="sm" variant="secondary">
              Add an ignored tag
            </Button>
          </div>
        </SidebarWidget.Box>
      </SidebarWidget>
    </aside>
  );
}

export default Sidebar;
