import { FC, ReactNode, useSyncExternalStore } from "react";
import { SyncExternalStore } from "sync-external-store";

export interface Commands {
  [key: string]: Command | undefined;
}

export interface Command {
  run: () => void;
}

const commandStore = new SyncExternalStore<Commands>({});

export function registerCommand(name: string, command: Command) {
  commandStore.state = {
    ...commandStore.state,
    [name]: command,
  };
}

export function useCommand(name: string) {
  return useSyncExternalStore(
    commandStore.subscribe,
    commandStore.getSnapshot,
    commandStore.getSnapshot
  )[name];
}

export interface CommandConnector {
  name: string;
  children: (command: Command | undefined) => ReactNode;
}

export const CommandConnector: FC<CommandConnector> = (props) => {
  const command = useCommand(props.name);
  return <>{props.children(command)}</>;
};
