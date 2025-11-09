import { Trans } from "@lingui-solid/solid/macro";

import { useState } from "@revolt/state";
import { CategoryButton, Checkbox, Column, Text } from "@revolt/ui";

/**
 * Voice processing options
 */
export function VoiceProcessingOptions() {
  const state = useState();

  return (
    <Column>
      <Text class="title">
        <Trans>Voice Processing</Trans>
      </Text>
      <CategoryButton.Group>
        <CategoryButton
          icon="blank"
          // Corrected to use the renamed noiseSuppression flag so toggling updates the browser's built-in noise filter.
          action={<Checkbox checked={state.voice.noiseSuppression} />}
          onClick={() =>
            (state.voice.noiseSuppression = !state.voice.noiseSuppression)
          }
        >
          <Trans>Browser Noise Suppression</Trans>
        </CategoryButton>
        <CategoryButton
          icon="blank"
          action={<Checkbox checked={state.voice.echoCancellation} />}
          onClick={() =>
            (state.voice.echoCancellation = !state.voice.echoCancellation)
          }
        >
          <Trans>Browser Echo Cancellation</Trans>
        </CategoryButton>
      </CategoryButton.Group>
    </Column>
  );
}
