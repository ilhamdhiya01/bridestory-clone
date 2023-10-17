export type HomeState = {
  isOpen: boolean;
};

export type HomeAction = {
  onOpen: () => void;
  onClose: () => void;
};

export type HomeStore = HomeState & HomeAction;
