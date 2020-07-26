import {createEditMessage} from './mutations'

import { Message } from "./models";
import { createMockReactiveVar } from "./tests/createMockReactiveVar";

const mockMessageVar = createMockReactiveVar<Message>({ id: 0, text: '' });
const editMessage = createEditMessage(mockMessageVar);

describe('editMessage mutation', () => {
  beforeEach(() => mockMessageVar());
  
  it('should edit message text', () => {
    mockMessageVar({ id: 0, text: 'Initial message'})

    editMessage("A new message");

    expect(
      mockMessageVar().text
    ).toEqual("A new message")
  });
})